import { existsSync, readFileSync } from 'fs';
import * as path from 'path';
import { JsonFile } from 'projen';
import { CheckForUpgradesScriptFile } from './check-for-upgrade';
import { ProviderUpgrade } from './provider-upgrade';
import { AwlsringCdktfLibrary, AwlsringCdktfLibraryOptions } from '../cdktf-library';

export interface CdktfProvider {
  readonly owner: string;
  readonly name: string;
  readonly version: string;
}

export interface CdktfProviderLibraryOptions extends AwlsringCdktfLibraryOptions {
  readonly provider: CdktfProvider;
}

export class AwlsringCdktfProviderLibrary extends AwlsringCdktfLibrary {
  readonly cdktfJson = 'cdktf.json';

  constructor(props: CdktfProviderLibraryOptions) {
    super(props);

    const providerName = `${props.provider.owner}/${props.provider.name}`;

    this.addPeerDeps(`cdktf@${props.cdktfVersion}`);
    this.addPeerDeps(`constructs@${props.constructsVersion}`);

    this.addDevDeps(`cdktf@${props.cdktfVersion}`);
    this.addDevDeps(`cdktf-cli@${props.cdktfVersion}`);
    this.addDevDeps(`constructs@${props.constructsVersion}`);

    const versionFile = path.resolve(this.outdir, 'src/version.json');

    let fullyQualifiedProviderName = '<unknown>';
    let actualProviderVersion = '<unknown>';
    if (existsSync(versionFile)) {
      const map = JSON.parse(readFileSync(versionFile, 'utf8'));
      if (Object.keys(map).length !== 1) {
        throw new Error(
          'version.json must have exactly one entry. specifying multiple providers is not supported',
        );
      }
      const [fqpn, version] = Object.entries(map)[0];
      fullyQualifiedProviderName = fqpn;
      actualProviderVersion = version as string;
    }

    this.addFields({
      cdktf: {
        provider: {
          name: fullyQualifiedProviderName,
          version: actualProviderVersion,
        },
      },
    });

    const upgradeScript = new CheckForUpgradesScriptFile(this, {
      providerVersion: props.provider.version,
      fqproviderName: providerName,
    });

    new ProviderUpgrade(this, {
      scriptPath: upgradeScript.path,
    });

    new JsonFile(this, this.cdktfJson, {
      obj: {
        language: 'typescript',
        app: 'echo noop',
        sendCrashReports: false,
        terraformProviders: [`${props.provider.owner}/${props.provider.name}@${props.provider.version}`],
      },
    });
    this.addTask('fetch', {
      exec: `mkdir -p src/base && rm -rf ./src/base/* && cdktf get && cp -R .gen/providers/${props.provider.name}/* ./src/base/ && cp .gen/versions.json ./src/version.json`,
      env: {
        CHECKPOINT_DISABLE: '1',
      },
    });

    this.setScript(
      'commit',
      'git add -A && git commit -am "Update provider" || echo "No changes to commit"',
    );
    // eslint-disable-next-line quotes
    this.setScript(
      'should-release',
      '! git diff --exit-code v$(cat version.json | jq -r \'.version\') ./src ./package.json',
    );
    this.setScript(
      'prebump',
      'yarn fetch && yarn compile && yarn run commit && yarn run should-release',
    );
    this.setScript('compile', 'jsii --silence-warnings=reserved-word');

    this.setScript(
      'build-provider',
      'yarn fetch && yarn compile && yarn docgen',
    );
    this.setScript('test', 'jest --passWithNoTests');

    if (this.npmignore) {
      this.npmignore.exclude(this.cdktfJson);
      this.npmignore.exclude('.gen');
      this.npmignore.exclude('.terraform');
      this.npmignore.exclude('cdktf.json');
    }
    this.gitignore.exclude('.gen');
    this.gitignore.exclude('.terraform');
    this.gitignore.exclude('package-lock.json');
    this.gitignore.exclude(this.cdktfJson);
  }
}
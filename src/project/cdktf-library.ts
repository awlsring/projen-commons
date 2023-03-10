import { JsiiDotNetTarget, JsiiGoTarget, JsiiPythonTarget } from 'projen/lib/cdk';
import { ConstructLibraryCdktf, ConstructLibraryCdktfOptions } from 'projen/lib/cdktf';
import { NpmAccess } from 'projen/lib/javascript';
import { AwlsringCommonProps } from './common';

export interface PublishOptions {
  readonly npmAccess?: NpmAccess;
  readonly releaseToNpm?: boolean;
  readonly publishToPypi?: JsiiPythonTarget;
  readonly publishToGo?: JsiiGoTarget;
  readonly publishToNuget?: JsiiDotNetTarget;
}

// Doing this to set all base params as optional then extending the interface
// Needs to do indirect to trick projen into thinking it's a new interface
interface BaseCDKTFOptions extends Partial<ConstructLibraryCdktfOptions> {
  readonly name: string;
  readonly cdktfVersion: string;
  readonly repositoryUrl: string;
}

export interface AwlsringCdktfLibraryOptions extends BaseCDKTFOptions {
  readonly publish: boolean;
}

export class AwlsringCdktfLibrary extends ConstructLibraryCdktf {
  private static publishOptions(options: AwlsringCdktfLibraryOptions) {
    let publishOptions: PublishOptions = {};
    if (options.publish) {
      const pyPiOptions = {
        publishToPypi: {
          distName: options.name,
          module: options.name.replace('-', '_'),
        },
      };

      const npmOptions = {
        npmAccess: NpmAccess.PUBLIC,
        releaseToNpm: true,
      };

      let splitSpace = options.name.split('-');
      for (let i = 0; i < splitSpace.length; i++) {
        splitSpace[i] = splitSpace[i][0].toUpperCase() + splitSpace[i].substr(1);
      }
      const nugetName = `Awlsring.${splitSpace.join('')}`;
      const nugetOptions = {
        publishToNuget: {
          dotNetNamespace: nugetName,
          packageId: nugetName,
        },
      };

      publishOptions = {
        ...pyPiOptions,
        ...npmOptions,
        ...nugetOptions,
      };
    }
    return publishOptions;
  }

  constructor(options: AwlsringCdktfLibraryOptions) {
    const packageName = `@awlsring/${options.name}`;
    const devDeps = ['@awlsring/projen-commons', '@actions/core@^1.1.0', 'dot-prop@^5.2.0'];
    if (options.devDeps) {
      devDeps.push(...options.devDeps);
    }
    super({
      packageName: packageName,
      ...AwlsringCdktfLibrary.publishOptions(options),
      ...AwlsringCommonProps,
      ...options,
      devDeps: devDeps,
    });
  }
}
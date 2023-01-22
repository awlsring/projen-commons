import { JsiiDotNetTarget, JsiiGoTarget, JsiiPythonTarget } from 'projen/lib/cdk';
import { ConstructLibraryCdktf, ConstructLibraryCdktfOptions } from 'projen/lib/cdktf';
import { NpmAccess } from 'projen/lib/javascript';
import { AwlsringCommonProps } from './common-properties';

export interface PublishOptions {
  readonly npmAccess?: NpmAccess;
  readonly releaseToNpm?: boolean;
  readonly publishToPyPi?: JsiiPythonTarget;
  readonly publishToGo?: JsiiGoTarget;
  readonly publishToNuget?: JsiiDotNetTarget;
}

export interface AwlsringCdktfLibraryOptions extends ConstructLibraryCdktfOptions {
  readonly publish: boolean;
}

export class AwlsringCdktfLibrary extends ConstructLibraryCdktf {
  private static publishOptions(options: AwlsringCdktfLibraryOptions) {
    let publishOptions: PublishOptions = {};
    if (options.publish) {
      const pyPiOptions = {
        publishToPyPi: {
          distName: options.name,
          module: options.name.replace('-', '_'),
        },
      };

      const npmOptions = {
        npmAccess: NpmAccess.PUBLIC,
        releaseToNpm: true,
      };

      const goOptions = {
        publishToGo: {
          moduleName: `github.com/awlsring/${options.name}`,
          gitUserName: 'awlsring',
          gitUserEmail: AwlsringCommonProps.authorAddress,
        },
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
        ...goOptions,
        ...nugetOptions,
      };
    }
    return publishOptions;
  }

  constructor(options: AwlsringCdktfLibraryOptions) {
    const packageName = `@awlsring/${options.name}`;
    const devDeps = ['@awlsring/projen-commons'];
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
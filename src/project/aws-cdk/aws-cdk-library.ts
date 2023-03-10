import { AwsCdkConstructLibrary, AwsCdkConstructLibraryOptions } from 'projen/lib/awscdk';
import { NpmAccess } from 'projen/lib/javascript';
import { AwlsringCommonProps, PublishOptions } from '../common';

interface BaseAwsCdkOptions extends Partial<AwsCdkConstructLibraryOptions> {
  readonly name: string;
  readonly cdkVersion: string;
  readonly repositoryUrl: string;
}

export interface AwlsringAwsCdkLibraryOptions extends BaseAwsCdkOptions {
  readonly publish: boolean;
}

export class AwlsringAwsCdkLibrary extends AwsCdkConstructLibrary {
  private static publishOptions(options: AwlsringAwsCdkLibraryOptions) {
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

  constructor(options: AwlsringAwsCdkLibraryOptions) {
    const packageName = `@awlsring/${options.name}`;
    const devDeps = ['@awlsring/projen-commons', '@actions/core@^1.1.0', 'dot-prop@^5.2.0'];
    if (options.devDeps) {
      devDeps.push(...options.devDeps);
    }
    super({
      packageName: packageName,
      ...AwlsringAwsCdkLibrary.publishOptions(options),
      ...AwlsringCommonProps,
      ...options,
      devDeps: devDeps,
    });
  }
}
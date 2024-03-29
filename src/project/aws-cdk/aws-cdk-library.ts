import { AwsCdkConstructLibrary, AwsCdkConstructLibraryOptions } from 'projen/lib/awscdk';
import { AwlsringCommonProps, configurePublish } from '../common';

interface BaseAwsCdkOptions extends Partial<AwsCdkConstructLibraryOptions> {
  readonly name: string;
  readonly cdkVersion: string;
  readonly repositoryUrl: string;
}

export interface AwlsringAwsCdkLibraryOptions extends BaseAwsCdkOptions {
  readonly publish: boolean;
}

export class AwlsringAwsCdkLibrary extends AwsCdkConstructLibrary {
  constructor(options: AwlsringAwsCdkLibraryOptions) {
    const packageName = `@awlsring/${options.name}`;
    const devDeps = ['@awlsring/projen-commons', '@actions/core@^1.1.0', 'dot-prop@^5.2.0'];
    if (options.devDeps) {
      devDeps.push(...options.devDeps);
    }
    super({
      packageName: packageName,
      ...configurePublish(options),
      ...AwlsringCommonProps,
      ...options,
      devDeps: devDeps,
    });
  }
}
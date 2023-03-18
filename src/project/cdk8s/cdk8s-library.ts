import { ConstructLibraryCdk8s, ConstructLibraryCdk8sOptions } from 'projen/lib/cdk8s';
import { AwlsringCommonProps, configurePublish } from '../common';

interface BaseCdk8sOptions extends Partial<ConstructLibraryCdk8sOptions> {
  readonly name: string;
  readonly cdk8sVersion: string;
  readonly repositoryUrl: string;
}

export interface AwlsringAwsCdkLibraryOptions extends BaseCdk8sOptions {
  readonly publish: boolean;
}

export class AwlsringCdk8sLibrary extends ConstructLibraryCdk8s {
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

import { ConstructLibraryCdktf, ConstructLibraryCdktfOptions } from 'projen/lib/cdktf';
import { AwlsringCommonProps, configurePublish } from './common';

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
  constructor(options: AwlsringCdktfLibraryOptions) {
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
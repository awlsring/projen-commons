import { JsiiDotNetTarget, JsiiGoTarget, JsiiPythonTarget } from 'projen/lib/cdk';
import { NpmAccess } from 'projen/lib/javascript';

export const AwlsringCommonProps = {
  author: 'awlsring',
  projenrcTs: true,
  authorAddress: 'mattcanemail@gmail.com',
  defaultReleaseBranch: 'main',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['awlsring'],
    secret: 'GITHUB_TOKEN',
  },
  githubOptions: {
    projenTokenSecret: 'PROJEN_GITHUB_TOKEN',
  },
};

export interface PublishOptions {
  readonly npmAccess?: NpmAccess;
  readonly releaseToNpm?: boolean;
  readonly publishToPypi?: JsiiPythonTarget;
  readonly publishToGo?: JsiiGoTarget;
  readonly publishToNuget?: JsiiDotNetTarget;
}

export interface AwlsringConstructLibraryPublishOptions {
  readonly publish: boolean;
  readonly name: string;
  readonly repositoryUrl: string;
}

export function configurePublish(options: AwlsringConstructLibraryPublishOptions) {
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
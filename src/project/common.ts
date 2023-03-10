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
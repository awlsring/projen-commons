import { JsiiProject } from 'projen/lib/cdk';
import { NpmAccess, UpgradeDependenciesSchedule } from 'projen/lib/javascript';

const project = new JsiiProject({
  author: 'awlsring',
  authorAddress: 'mattcanemail@gmail.com',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: 'projen-commons',
  repositoryUrl: 'https://github.com/awlsring/projen-commons.git',
  packageName: '@awlsring/projen-commons',
  devDeps: ['projen'],
  peerDeps: ['projen@^0.72'],
  npmAccess: NpmAccess.PUBLIC,
  releaseToNpm: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['awlsring'],
  },
  githubOptions: {
    projenTokenSecret: 'PROJEN_GITHUB_TOKEN',
  },
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  },
});
project.gitignore.exclude('package-lock.json');
project.synth();
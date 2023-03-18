import { JsiiProject } from 'projen/lib/cdk';
import { NpmAccess } from 'projen/lib/javascript';

const project = new JsiiProject({
  author: 'awlsring',
  authorAddress: 'mattcanemail@gmail.com',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  name: 'projen-commons',
  repositoryUrl: 'https://github.com/awlsring/projen-commons.git',
  packageName: '@awlsring/projen-commons',
  deps: ['projen'],
  peerDeps: ['projen'],
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
});
project.gitignore.exclude('package-lock.json');
project.synth();
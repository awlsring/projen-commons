export const AwlsringCommonProps = {
  author: 'awlsring',
  authorAddress: 'mattcanemail@gmail.com',
  defaultReleaseBranch: 'main',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['awlsring', 'github-actions'],
    secret: 'GITHUB_TOKEN',
  },
  githubOptions: {
    projenTokenSecret: 'PROJEN_GITHUB_TOKEN',
  },
};
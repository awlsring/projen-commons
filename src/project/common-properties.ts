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
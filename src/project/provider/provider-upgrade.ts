import { JobPermission } from 'projen/lib/github/workflows-model';
import { NodeProject } from 'projen/lib/javascript';

export interface ProviderUpgradeOptions {
  readonly scriptPath: string;
}

/**
 * Checks for new versions of the given provider and creates a PR with an upgrade change if there are changes.
 */
export class ProviderUpgrade {
  constructor(project: NodeProject, options: ProviderUpgradeOptions) {
    project.addTask('check-if-new-provider-version', {
      exec: `node ./${options.scriptPath}`,
    });

    const workflow = project.github?.addWorkflow('provider-upgrade');

    if (!workflow) throw new Error('no workflow defined');

    workflow.on({
      schedule: [{ cron: '0 3 * * *' }], // Run every day at 3 O'Clock
      workflowDispatch: {}, // allow manual triggering
    });

    const newerVersionAvailable =
      "${{ steps.check_version.outputs.new_version == 'available' }}";
    const currentVersion = '${{ steps.current_version.outputs.value }}';
    const newVersion = '${{ steps.new_version.outputs.value }}';

    workflow.addJobs({
      upgrade: {
        runsOn: ['ubuntu-latest'],
        steps: [
          {
            name: 'Checkout',
            uses: 'actions/checkout@v2',
          },
          { run: 'yarn install' },
          { run: 'yarn add @actions/core' },
          {
            id: 'check_version',
            run: 'yarn check-if-new-provider-version',
          },
          {
            name: 'get provider current version',
            if: newerVersionAvailable,
            id: 'current_version',
            run: 'echo "value=$(jq -r \'.cdktf.provider.version\' package.json)" >> $GITHUB_OUTPUT',
          },
          {
            run: 'yarn fetch',
            if: newerVersionAvailable,
            env: {
              CHECKPOINT_DISABLE: '1',
              GH_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
            },
          },
          {
            name: 'get provider updated version',
            if: newerVersionAvailable,
            id: 'new_version',
            run: 'echo "value=$(jq -r \'. | to_entries[] | .value\' src/version.json)" >> $GITHUB_OUTPUT',
          },
          { run: 'yarn compile', if: newerVersionAvailable },
          { run: 'yarn docgen', if: newerVersionAvailable },
          {
            name: 'Set git identity',
            run: 'git config user.name "github-actions" && git config user.email "github-actions@github.com"',
          },
          {
            name: 'Create Pull Request',
            if: newerVersionAvailable,
            uses: 'peter-evans/create-pull-request@v4',
            with: {
              'commit-message': `chore: upgrade provider from \`${currentVersion}\` to version \`${newVersion}\``,
              'branch': 'github-actions/upgrade-main',
              'title': `chore: upgrade provider from \`${currentVersion}\` to version \`${newVersion}\``,
              'body': `This PR upgrades provider to version ${newVersion}`,
              'labels': 'auto-approve',
              'token': '${{ secrets.PROJEN_GITHUB_TOKEN }}',
              'committer': 'github-actions <github-actions@github.com>',
              'author': 'github-actions <github-actions@github.com>',
              'signoff': true,
            },
          },
        ],
        permissions: {
          pullRequests: JobPermission.WRITE,
          issues: JobPermission.WRITE,
          contents: JobPermission.WRITE,
          statuses: JobPermission.WRITE,
        },
      },
    });
  }
}
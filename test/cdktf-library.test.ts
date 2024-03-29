import { NpmAccess } from 'projen/lib/javascript';
import { AwlsringCdktfLibrary } from '../src';
import { configurePublish } from '../src/project/common';

describe('Test CDKTF library', () => {
  test('Creation gives no errors', () => {
    const options = {
      cdktfVersion: '0.6.0',
      publish: false,
      name: 'projen-commons',
      repositoryUrl: 'https://github.com/awlsring/projen-commons.git',
      deps: ['projen'],
      peerDeps: ['projen'],
    };
    const project = new AwlsringCdktfLibrary(options);
    expect(project).toBeTruthy();
  });
  test('Test publish produces no options', () => {
    const options = {
      cdktfVersion: '0.6.0',
      publish: false,
      name: 'projen-commons',
      repositoryUrl: 'https://github.com/awlsring/projen-commons.git',
      deps: ['projen'],
      peerDeps: ['projen'],
    };
    // eslint-disable-next-line dot-notation
    const publishOptions = configurePublish(options);
    expect(publishOptions).toEqual({});
  });
  test('Test publish with devDeps appends', () => {
    const options = {
      cdktfVersion: '0.6.0',
      publish: false,
      name: 'projen-commons',
      repositoryUrl: 'https://github.com/awlsring/projen-commons.git',
      deps: ['projen'],
      peerDeps: ['projen'],
      devDeps: ['test'],
    };
    // eslint-disable-next-line dot-notation
    configurePublish(options);
    new AwlsringCdktfLibrary(options);
  });
  test('Test publish produces options', () => {
    const options = {
      author: 'awlsring',
      cdktfVersion: '0.6.0',
      publish: true,
      authorAddress: 'mattcanemail@gmail.com',
      defaultReleaseBranch: 'main',
      projenrcTs: true,
      name: 'test-library',
      repositoryUrl: 'https://github.com/awlsring/test-library.git',
    };
    // eslint-disable-next-line dot-notation
    const publishOptions = configurePublish(options);
    expect(publishOptions.npmAccess).toEqual(NpmAccess.PUBLIC);
    expect(publishOptions.releaseToNpm).toEqual(true);
    expect(publishOptions.publishToPypi?.distName).toEqual(options.name);
    expect(publishOptions.publishToPypi?.module).toEqual(options.name.replace('-', '_'));
    expect(publishOptions.publishToNuget?.dotNetNamespace).toEqual('Awlsring.TestLibrary');
    expect(publishOptions.publishToNuget?.packageId).toEqual('Awlsring.TestLibrary');
  });
});
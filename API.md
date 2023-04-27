# projen-commons

This is a commons repository for my projen projects.


# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### AwlsringAwsCdkLibraryOptions <a name="AwlsringAwsCdkLibraryOptions" id="@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions"></a>

#### Initializer <a name="Initializer" id="@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.Initializer"></a>

```typescript
import { AwlsringAwsCdkLibraryOptions } from '@awlsring/projen-commons'

const awlsringAwsCdkLibraryOptions: AwlsringAwsCdkLibraryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.publish">publish</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

Minimum version of the AWS CDK to depend on.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This is the name of your project.

---

##### `publish`<sup>Required</sup> <a name="publish" id="@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.publish"></a>

```typescript
public readonly publish: boolean;
```

- *Type:* boolean

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Git repository URL.

---

### AwlsringCdk8sLibraryOptions <a name="AwlsringCdk8sLibraryOptions" id="@awlsring/projen-commons.AwlsringCdk8sLibraryOptions"></a>

#### Initializer <a name="Initializer" id="@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.Initializer"></a>

```typescript
import { AwlsringCdk8sLibraryOptions } from '@awlsring/projen-commons'

const awlsringCdk8sLibraryOptions: AwlsringCdk8sLibraryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | Minimum target version this library is tested against. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.publish">publish</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string

Minimum target version this library is tested against.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This is the name of your project.

---

##### `publish`<sup>Required</sup> <a name="publish" id="@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.publish"></a>

```typescript
public readonly publish: boolean;
```

- *Type:* boolean

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@awlsring/projen-commons.AwlsringCdk8sLibraryOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Git repository URL.

---

### AwlsringCdktfLibraryOptions <a name="AwlsringCdktfLibraryOptions" id="@awlsring/projen-commons.AwlsringCdktfLibraryOptions"></a>

#### Initializer <a name="Initializer" id="@awlsring/projen-commons.AwlsringCdktfLibraryOptions.Initializer"></a>

```typescript
import { AwlsringCdktfLibraryOptions } from '@awlsring/projen-commons'

const awlsringCdktfLibraryOptions: AwlsringCdktfLibraryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.cdktfVersion">cdktfVersion</a></code> | <code>string</code> | Minimum target version this library is tested against. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.publish">publish</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |

---

##### `cdktfVersion`<sup>Required</sup> <a name="cdktfVersion" id="@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.cdktfVersion"></a>

```typescript
public readonly cdktfVersion: string;
```

- *Type:* string

Minimum target version this library is tested against.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This is the name of your project.

---

##### `publish`<sup>Required</sup> <a name="publish" id="@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.publish"></a>

```typescript
public readonly publish: boolean;
```

- *Type:* boolean

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@awlsring/projen-commons.AwlsringCdktfLibraryOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Git repository URL.

---

### CdktfProvider <a name="CdktfProvider" id="@awlsring/projen-commons.CdktfProvider"></a>

#### Initializer <a name="Initializer" id="@awlsring/projen-commons.CdktfProvider.Initializer"></a>

```typescript
import { CdktfProvider } from '@awlsring/projen-commons'

const cdktfProvider: CdktfProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.CdktfProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.CdktfProvider.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.CdktfProvider.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.CdktfProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@awlsring/projen-commons.CdktfProvider.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@awlsring/projen-commons.CdktfProvider.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### CdktfProviderLibraryOptions <a name="CdktfProviderLibraryOptions" id="@awlsring/projen-commons.CdktfProviderLibraryOptions"></a>

#### Initializer <a name="Initializer" id="@awlsring/projen-commons.CdktfProviderLibraryOptions.Initializer"></a>

```typescript
import { CdktfProviderLibraryOptions } from '@awlsring/projen-commons'

const cdktfProviderLibraryOptions: CdktfProviderLibraryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.CdktfProviderLibraryOptions.property.cdktfVersion">cdktfVersion</a></code> | <code>string</code> | Minimum target version this library is tested against. |
| <code><a href="#@awlsring/projen-commons.CdktfProviderLibraryOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@awlsring/projen-commons.CdktfProviderLibraryOptions.property.publish">publish</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.CdktfProviderLibraryOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@awlsring/projen-commons.CdktfProviderLibraryOptions.property.provider">provider</a></code> | <code><a href="#@awlsring/projen-commons.CdktfProvider">CdktfProvider</a></code> | *No description.* |

---

##### `cdktfVersion`<sup>Required</sup> <a name="cdktfVersion" id="@awlsring/projen-commons.CdktfProviderLibraryOptions.property.cdktfVersion"></a>

```typescript
public readonly cdktfVersion: string;
```

- *Type:* string

Minimum target version this library is tested against.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.CdktfProviderLibraryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This is the name of your project.

---

##### `publish`<sup>Required</sup> <a name="publish" id="@awlsring/projen-commons.CdktfProviderLibraryOptions.property.publish"></a>

```typescript
public readonly publish: boolean;
```

- *Type:* boolean

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@awlsring/projen-commons.CdktfProviderLibraryOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Git repository URL.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@awlsring/projen-commons.CdktfProviderLibraryOptions.property.provider"></a>

```typescript
public readonly provider: CdktfProvider;
```

- *Type:* <a href="#@awlsring/projen-commons.CdktfProvider">CdktfProvider</a>

---

### CheckForUpgradesScriptFileOptions <a name="CheckForUpgradesScriptFileOptions" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions"></a>

#### Initializer <a name="Initializer" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.Initializer"></a>

```typescript
import { CheckForUpgradesScriptFileOptions } from '@awlsring/projen-commons'

const checkForUpgradesScriptFileOptions: CheckForUpgradesScriptFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.fqproviderName">fqproviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.providerVersion">providerVersion</a></code> | <code>string</code> | *No description.* |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `fqproviderName`<sup>Required</sup> <a name="fqproviderName" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.fqproviderName"></a>

```typescript
public readonly fqproviderName: string;
```

- *Type:* string

---

##### `providerVersion`<sup>Required</sup> <a name="providerVersion" id="@awlsring/projen-commons.CheckForUpgradesScriptFileOptions.property.providerVersion"></a>

```typescript
public readonly providerVersion: string;
```

- *Type:* string

---

### ProviderUpgradeOptions <a name="ProviderUpgradeOptions" id="@awlsring/projen-commons.ProviderUpgradeOptions"></a>

#### Initializer <a name="Initializer" id="@awlsring/projen-commons.ProviderUpgradeOptions.Initializer"></a>

```typescript
import { ProviderUpgradeOptions } from '@awlsring/projen-commons'

const providerUpgradeOptions: ProviderUpgradeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.ProviderUpgradeOptions.property.scriptPath">scriptPath</a></code> | <code>string</code> | *No description.* |

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@awlsring/projen-commons.ProviderUpgradeOptions.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### AwlsringAwsCdkLibrary <a name="AwlsringAwsCdkLibrary" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary"></a>

#### Initializers <a name="Initializers" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.Initializer"></a>

```typescript
import { AwlsringAwsCdkLibrary } from '@awlsring/projen-commons'

new AwlsringAwsCdkLibrary(options: AwlsringAwsCdkLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.Initializer.parameter.options">options</a></code> | <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions">AwlsringAwsCdkLibraryOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.Initializer.parameter.options"></a>

- *Type:* <a href="#@awlsring/projen-commons.AwlsringAwsCdkLibraryOptions">AwlsringAwsCdkLibraryOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCdkDependencies">addCdkDependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCdkTestDependencies">addCdkTestDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### ~~`addCdkDependencies`~~ <a name="addCdkDependencies" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCdkDependencies"></a>

```typescript
public addCdkDependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

Since this is a library project, dependencies will be added as peer dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCdkDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### ~~`addCdkTestDependencies`~~ <a name="addCdkTestDependencies" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCdkTestDependencies"></a>

```typescript
public addCdkTestDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.addCdkTestDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

##### ~~`version`~~<sup>Required</sup> <a name="version" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.version"></a>

- *Deprecated:* use `cdkVersion`

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@awlsring/projen-commons.AwlsringAwsCdkLibrary.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### AwlsringCdk8sLibrary <a name="AwlsringCdk8sLibrary" id="@awlsring/projen-commons.AwlsringCdk8sLibrary"></a>

#### Initializers <a name="Initializers" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.Initializer"></a>

```typescript
import { AwlsringCdk8sLibrary } from '@awlsring/projen-commons'

new AwlsringCdk8sLibrary(options: AwlsringCdk8sLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.Initializer.parameter.options">options</a></code> | <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibraryOptions">AwlsringCdk8sLibraryOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.Initializer.parameter.options"></a>

- *Type:* <a href="#@awlsring/projen-commons.AwlsringCdk8sLibraryOptions">AwlsringCdk8sLibraryOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | The CDK8s version this app is using. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | The constructs version this app is using. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string

The CDK8s version this app is using.

---

##### `constructsVersion`<sup>Required</sup> <a name="constructsVersion" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string

The constructs version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdk8sLibrary.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@awlsring/projen-commons.AwlsringCdk8sLibrary.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### AwlsringCdktfLibrary <a name="AwlsringCdktfLibrary" id="@awlsring/projen-commons.AwlsringCdktfLibrary"></a>

#### Initializers <a name="Initializers" id="@awlsring/projen-commons.AwlsringCdktfLibrary.Initializer"></a>

```typescript
import { AwlsringCdktfLibrary } from '@awlsring/projen-commons'

new AwlsringCdktfLibrary(options: AwlsringCdktfLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.Initializer.parameter.options">options</a></code> | <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibraryOptions">AwlsringCdktfLibraryOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@awlsring/projen-commons.AwlsringCdktfLibrary.Initializer.parameter.options"></a>

- *Type:* <a href="#@awlsring/projen-commons.AwlsringCdktfLibraryOptions">AwlsringCdktfLibraryOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@awlsring/projen-commons.AwlsringCdktfLibrary.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@awlsring/projen-commons.AwlsringCdktfLibrary.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@awlsring/projen-commons.AwlsringCdktfLibrary.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@awlsring/projen-commons.AwlsringCdktfLibrary.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfLibrary.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@awlsring/projen-commons.AwlsringCdktfLibrary.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@awlsring/projen-commons.AwlsringCdktfLibrary.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@awlsring/projen-commons.AwlsringCdktfLibrary.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfLibrary.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringCdktfLibrary.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@awlsring/projen-commons.AwlsringCdktfLibrary.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfLibrary.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@awlsring/projen-commons.AwlsringCdktfLibrary.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfLibrary.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@awlsring/projen-commons.AwlsringCdktfLibrary.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@awlsring/projen-commons.AwlsringCdktfLibrary.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@awlsring/projen-commons.AwlsringCdktfLibrary.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfLibrary.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@awlsring/projen-commons.AwlsringCdktfLibrary.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfLibrary.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@awlsring/projen-commons.AwlsringCdktfLibrary.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### AwlsringCdktfProviderLibrary <a name="AwlsringCdktfProviderLibrary" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary"></a>

#### Initializers <a name="Initializers" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.Initializer"></a>

```typescript
import { AwlsringCdktfProviderLibrary } from '@awlsring/projen-commons'

new AwlsringCdktfProviderLibrary(props: CdktfProviderLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.Initializer.parameter.props">props</a></code> | <code><a href="#@awlsring/projen-commons.CdktfProviderLibraryOptions">CdktfProviderLibraryOptions</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.Initializer.parameter.props"></a>

- *Type:* <a href="#@awlsring/projen-commons.CdktfProviderLibraryOptions">CdktfProviderLibraryOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.cdktfJson">cdktfJson</a></code> | <code>string</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdktfJson`<sup>Required</sup> <a name="cdktfJson" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.cdktfJson"></a>

```typescript
public readonly cdktfJson: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@awlsring/projen-commons.AwlsringCdktfProviderLibrary.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### CheckForUpgradesScriptFile <a name="CheckForUpgradesScriptFile" id="@awlsring/projen-commons.CheckForUpgradesScriptFile"></a>

#### Initializers <a name="Initializers" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.Initializer"></a>

```typescript
import { CheckForUpgradesScriptFile } from '@awlsring/projen-commons'

new CheckForUpgradesScriptFile(project: NodeProject, options: CheckForUpgradesScriptFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.Initializer.parameter.options">options</a></code> | <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions">CheckForUpgradesScriptFileOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Required</sup> <a name="options" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.Initializer.parameter.options"></a>

- *Type:* <a href="#@awlsring/projen-commons.CheckForUpgradesScriptFileOptions">CheckForUpgradesScriptFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project root. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@awlsring/projen-commons.CheckForUpgradesScriptFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `project`<sup>Required</sup> <a name="project" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project root.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@awlsring/projen-commons.CheckForUpgradesScriptFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### ProviderUpgrade <a name="ProviderUpgrade" id="@awlsring/projen-commons.ProviderUpgrade"></a>

Checks for new versions of the given provider and creates a PR with an upgrade change if there are changes.

#### Initializers <a name="Initializers" id="@awlsring/projen-commons.ProviderUpgrade.Initializer"></a>

```typescript
import { ProviderUpgrade } from '@awlsring/projen-commons'

new ProviderUpgrade(project: NodeProject, options: ProviderUpgradeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/projen-commons.ProviderUpgrade.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@awlsring/projen-commons.ProviderUpgrade.Initializer.parameter.options">options</a></code> | <code><a href="#@awlsring/projen-commons.ProviderUpgradeOptions">ProviderUpgradeOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@awlsring/projen-commons.ProviderUpgrade.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Required</sup> <a name="options" id="@awlsring/projen-commons.ProviderUpgrade.Initializer.parameter.options"></a>

- *Type:* <a href="#@awlsring/projen-commons.ProviderUpgradeOptions">ProviderUpgradeOptions</a>

---







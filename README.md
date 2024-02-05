# sdk-starter-pack [WIP]

## Template to start an SDK project

### Functional Requirements

- [x] ES and CJS modules
- [x] Tree shakeable
- [x] joined ts files from separate ones. Each file should create a separate .d.ts file and all those should converge to a single index.d.ts file. For example there should be a sample1.d.ts, sample2.d.ts and an index.d.ts. index.d.ts exports the types of sample1.d.ts and sample2.d.ts

### Non Functional Requirements

- [x] Changeset
- [x] Husky
- [x] Codeowners
- [x] Tests
- [x] Linting
- [x] Prettier
- [x] GitHub actions
  - [x] build
  - [x] validate
    - [x] lint
  - [x] tests
  - [x] dangerjs
    - [x] Checks if changeset is present
  - [x] changeset
    - [x] publish on mater merge (fork a repo for it)
- [x] separate build for src and lib files - to avoid commit block when there is an error in src folder
- [ ] Reduce yarn install time in ci by removing unnecessary deps such as react etc

### Steps to make the template work

1. Change project name in `package.json`
2. Enable `Read and write permissions` to `GITHUB_ACCESS_TOKEN`. This will enable DangerJS CI checks. Refer [Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository) to do so.
3. Enable `Allow GitHub Actions to create and approve pull requests` for GitHub Actions. This will enable automatic pull request creation from changeset to update app version. Refer [Preventing GitHub Actions from creating or approving pull requests](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests) to do so.
4. Add your npm access token under the `CI_NPM_PUBLISH_TOKEN` repository secret. This will enable automatic publishing of the app on version pull request merge. Refer [Creating secrets for a repository](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) to do so.
5. Add ruleset to protect the main branch. Add `Build, Test and Validate`, `Danger JS` and `Danger` as required checks. This would stop unverified changes to the main branch. Refer [Creating rulesets for a repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository) to do so.
6. Change target in required places according to needs. In `package.json` change `files`, `main`, `module`, `types`, `exports.types`, `exports.import` and/or `exports.require` properties. In `vite.config.ts` change `build.name` and/or `buils.fileName` properties.

### Resources

- https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma
- https://vitejs.dev/guide/build#library-mode
- https://medium.com/@imdavidrock/why-should-you-use-commitizen-husky-for-conventional-commit-and-have-unified-lint-41047aad6d

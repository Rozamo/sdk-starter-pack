import { danger, fail } from "danger";

const hasChangelog = danger.git.created_files.find((fileName) =>
  new RegExp("^.changeset/[a-z]+[a-z,-]*[a-z]+.md$").test(fileName),
);

const hasSkipChangelogLabel = danger.github.issue.labels.find(
  (label) => label.name === "changelog not required",
);

if (!hasChangelog && !hasSkipChangelogLabel) {
  fail(
    "Please add a changelog entry for your changes.\n Check: https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md#i-am-in-a-single-package-repository for info on how to add changeset",
  );
}

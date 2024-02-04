import { danger, fail } from "danger";

const hasChangelog = danger.git.created_files.find((fileName) =>
  new RegExp("^.changeset/[a-z]+[a-z,-]*[a-z]+.md$").test(fileName),
);

const hasSkipChangesetLabel = danger.github.issue.labels.find(
  (label) => label.name === "changeset not required",
);

if (!hasChangelog && !hasSkipChangesetLabel) {
  fail("Please add a changeset entry for your changes.");
}

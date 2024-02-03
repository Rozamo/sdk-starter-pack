import { danger, fail } from "danger";

const hasChangelog = danger.git.created_files.find((fileName) =>
  new RegExp("^.changeset/[a-z]+[a-z,-]*[a-z]+.md$").test(fileName),
);

if (!hasChangelog) {
  fail("Please add a changelog entry for your changes.");
}

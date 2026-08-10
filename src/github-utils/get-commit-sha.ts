import * as github from "@actions/github";

import { hasEventPayload } from "./has-event-payload.ts";

export function getCommitSha(): string {
  if (hasEventPayload(github.context, "pull_request")) {
    return github.context.payload.pull_request.head.sha;
  }

  if (hasEventPayload(github.context, "workflow_run")) {
    return github.context.payload.workflow_run.head_sha;
  }

  return github.context.sha;
}

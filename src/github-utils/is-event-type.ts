import * as github from "@actions/github";
import type { EmitterWebhookEvent, WebhookEvents } from "@octokit/webhooks/types";

export function isEventType<T extends WebhookEvents>(
  context: typeof github.context,
  eventType: T,
): context is typeof github.context & EmitterWebhookEvent<T> {
  // Match on the payload, not `context.eventName`, so events like
  // pull_request_target (a `pull_request` payload under another name) report.
  return Boolean(context.payload[eventType]);
}

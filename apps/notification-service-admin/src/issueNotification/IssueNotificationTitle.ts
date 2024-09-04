import { IssueNotification as TIssueNotification } from "../api/issueNotification/IssueNotification";

export const ISSUENOTIFICATION_TITLE_FIELD = "id";

export const IssueNotificationTitle = (record: TIssueNotification): string => {
  return record.id?.toString() || String(record.id);
};

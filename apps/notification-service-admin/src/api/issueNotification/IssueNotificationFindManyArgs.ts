import { IssueNotificationWhereInput } from "./IssueNotificationWhereInput";
import { IssueNotificationOrderByInput } from "./IssueNotificationOrderByInput";

export type IssueNotificationFindManyArgs = {
  where?: IssueNotificationWhereInput;
  orderBy?: Array<IssueNotificationOrderByInput>;
  skip?: number;
  take?: number;
};

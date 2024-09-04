import { SecurityLog as TSecurityLog } from "../api/securityLog/SecurityLog";

export const SECURITYLOG_TITLE_FIELD = "id";

export const SecurityLogTitle = (record: TSecurityLog): string => {
  return record.id?.toString() || String(record.id);
};

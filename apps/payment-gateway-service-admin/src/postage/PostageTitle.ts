import { Postage as TPostage } from "../api/postage/Postage";

export const POSTAGE_TITLE_FIELD = "id";

export const PostageTitle = (record: TPostage): string => {
  return record.id?.toString() || String(record.id);
};

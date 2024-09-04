import { SalesReport as TSalesReport } from "../api/salesReport/SalesReport";

export const SALESREPORT_TITLE_FIELD = "id";

export const SalesReportTitle = (record: TSalesReport): string => {
  return record.id?.toString() || String(record.id);
};

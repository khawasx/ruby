import { ConversionRate as TConversionRate } from "../api/conversionRate/ConversionRate";

export const CONVERSIONRATE_TITLE_FIELD = "id";

export const ConversionRateTitle = (record: TConversionRate): string => {
  return record.id?.toString() || String(record.id);
};

import { ConversionRateWhereInput } from "./ConversionRateWhereInput";
import { ConversionRateOrderByInput } from "./ConversionRateOrderByInput";

export type ConversionRateFindManyArgs = {
  where?: ConversionRateWhereInput;
  orderBy?: Array<ConversionRateOrderByInput>;
  skip?: number;
  take?: number;
};

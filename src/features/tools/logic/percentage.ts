export interface PercentageCalculationResult {
  answer: number | string;
  explanation: string;
  summary: string;
}

export function calculatePercentageOf(
  percent: number,
  baseValue: number
): PercentageCalculationResult {
  const safePercent = isNaN(percent) ? 0 : percent;
  const safeBase = isNaN(baseValue) ? 0 : baseValue;
  const val = (safePercent / 100) * safeBase;
  const rounded = Number(val.toFixed(2));

  return {
    answer: rounded,
    explanation: `(${safePercent} ÷ 100) × ${safeBase} = ${val.toFixed(2)}`,
    summary: `${safePercent}% of ${safeBase.toLocaleString("en-IN")} is ${rounded.toLocaleString("en-IN")}`,
  };
}

export function calculateWhatPercentIs(
  part: number,
  whole: number
): PercentageCalculationResult {
  const safePart = isNaN(part) ? 0 : part;
  const safeWhole = isNaN(whole) ? 0 : whole;
  const val = safeWhole !== 0 ? (safePart / safeWhole) * 100 : 0;
  const formattedPercent = `${val.toFixed(2)}%`;

  return {
    answer: formattedPercent,
    explanation: `(${safePart} ÷ ${safeWhole}) × 100 = ${formattedPercent}`,
    summary: `${safePart.toLocaleString("en-IN")} is ${formattedPercent} of ${safeWhole.toLocaleString("en-IN")}`,
  };
}

export function calculatePercentageChange(
  fromValue: number,
  toValue: number
): PercentageCalculationResult {
  const safeFrom = isNaN(fromValue) ? 0 : fromValue;
  const safeTo = isNaN(toValue) ? 0 : toValue;
  const diff = safeTo - safeFrom;
  const percentChange = safeFrom !== 0 ? (diff / Math.abs(safeFrom)) * 100 : 0;
  const isIncrease = percentChange >= 0;
  const formattedPercent = `${isIncrease ? "+" : ""}${percentChange.toFixed(2)}%`;

  return {
    answer: formattedPercent,
    explanation: `((${safeTo} - ${safeFrom}) ÷ ${Math.abs(safeFrom)}) × 100 = ${percentChange.toFixed(2)}%`,
    summary: `From ${safeFrom.toLocaleString("en-IN")} to ${safeTo.toLocaleString("en-IN")} represents a ${Math.abs(percentChange).toFixed(2)}% ${isIncrease ? "increase" : "decrease"}.`,
  };
}


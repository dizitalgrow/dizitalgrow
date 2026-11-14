export interface GstCalculationResult {
  netAmount: number;
  totalGst: number;
  grossAmount: number;
  cgstAmount: number;
  sgstAmount: number;
  igstAmount: number;
}

export function calculateGst(
  amount: number,
  calculationType: "exclusive" | "inclusive",
  gstRate: number
): GstCalculationResult {
  const safeAmount = Math.max(0, isNaN(amount) ? 0 : amount);
  const safeRate = Math.max(0, isNaN(gstRate) ? 0 : gstRate);

  let netAmount = 0;
  let totalGst = 0;
  let grossAmount = 0;

  if (calculationType === "exclusive") {
    netAmount = safeAmount;
    totalGst = Math.round(safeAmount * (safeRate / 100));
    grossAmount = netAmount + totalGst;
  } else {
    grossAmount = safeAmount;
    netAmount = Math.round(safeAmount / (1 + safeRate / 100));
    totalGst = grossAmount - netAmount;
  }

  const cgstAmount = Math.round(totalGst / 2);
  const sgstAmount = totalGst - cgstAmount;
  const igstAmount = totalGst;

  return {
    netAmount,
    totalGst,
    grossAmount,
    cgstAmount,
    sgstAmount,
    igstAmount,
  };
}


export interface FreelanceRateCalculationResult {
  requiredGross: number;
  billableWeeks: number;
  annualBillableHours: number;
  minimumHourlyRate: number;
  dailyRate: number;
}

export function calculateFreelanceRate(
  desiredTakeHome: number,
  taxRatePercent: number,
  annualExpenses: number,
  vacationWeeks: number,
  weeklyHours: number,
  billableRatioPercent: number
): FreelanceRateCalculationResult {
  const safeTakeHome = Math.max(0, isNaN(desiredTakeHome) ? 0 : desiredTakeHome);
  const safeTax = Math.max(0, Math.min(80, isNaN(taxRatePercent) ? 25 : taxRatePercent));
  const safeExpenses = Math.max(0, isNaN(annualExpenses) ? 0 : annualExpenses);
  const safeVacation = Math.max(0, Math.min(50, isNaN(vacationWeeks) ? 4 : vacationWeeks));
  const safeWeeklyHours = Math.max(1, isNaN(weeklyHours) ? 40 : weeklyHours);
  const safeRatio = Math.max(10, Math.min(100, isNaN(billableRatioPercent) ? 60 : billableRatioPercent));

  // Required Pre-Tax Target: takeHome / (1 - taxRate) + expenses
  const preTaxIncome = safeTakeHome / (1 - safeTax / 100);
  const requiredGross = Math.round(preTaxIncome + safeExpenses);

  const billableWeeks = Math.max(1, 52 - safeVacation);
  const annualTotalHours = billableWeeks * safeWeeklyHours;
  const annualBillableHours = Math.max(1, Math.round(annualTotalHours * (safeRatio / 100)));

  const minimumHourlyRate = Math.round(requiredGross / annualBillableHours);
  const dailyRate = Math.round(minimumHourlyRate * (safeWeeklyHours / 5));

  return {
    requiredGross,
    billableWeeks,
    annualBillableHours,
    minimumHourlyRate,
    dailyRate,
  };
}


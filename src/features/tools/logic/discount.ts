export interface DiscountCalculationResult {
  primarySavings: number;
  discountedPrice: number;
  couponSavings: number;
  finalPrice: number;
  totalSavings: number;
  effectiveDiscountPercent: number;
}

export function calculateDiscount(
  listPrice: number,
  discountPercent: number,
  couponPercent: number = 0
): DiscountCalculationResult {
  const safeListPrice = Math.max(0, isNaN(listPrice) ? 0 : listPrice);
  const safeDiscount = Math.max(0, Math.min(100, isNaN(discountPercent) ? 0 : discountPercent));
  const safeCoupon = Math.max(0, Math.min(100, isNaN(couponPercent) ? 0 : couponPercent));

  const primarySavings = Number(((safeListPrice * safeDiscount) / 100).toFixed(2));
  const discountedPrice = Number((safeListPrice - primarySavings).toFixed(2));

  const couponSavings = Number(((discountedPrice * safeCoupon) / 100).toFixed(2));
  const finalPrice = Number((discountedPrice - couponSavings).toFixed(2));

  const totalSavings = Number((safeListPrice - finalPrice).toFixed(2));
  const effectiveDiscountPercent =
    safeListPrice > 0 ? Number(((totalSavings / safeListPrice) * 100).toFixed(2)) : 0;

  return {
    primarySavings,
    discountedPrice,
    couponSavings,
    finalPrice,
    totalSavings,
    effectiveDiscountPercent,
  };
}


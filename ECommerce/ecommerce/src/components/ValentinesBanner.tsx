import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";

async function ValentinesBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.SUCKS2BSINGLE);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-pink-600 to-black text-white px-6 py-4 mx-4 mt-2 rounded-lg shadow-lg">
      Valentines Sale Banner! {sale.discountAmount}% off with code:{" "}
      {sale.couponCode}
    </div>
  );
}

export default ValentinesBanner;

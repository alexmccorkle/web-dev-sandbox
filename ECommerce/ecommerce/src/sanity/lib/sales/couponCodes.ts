export const COUPON_CODES =
  {
    SUCKS2BSINGLE: 'SUCKS2BSINGLE',
    EASTER: 'EASTERBUNNY',
    HALLOWEEN: 'SPOOKY',
    CHRISTMAS: 'JOLLY',
  } as const;
  // Can add more codes below

  export type CouponCode = keyof typeof COUPON_CODES;
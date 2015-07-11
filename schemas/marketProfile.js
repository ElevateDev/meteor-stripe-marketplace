/*
 * Market profiles
 *  Type
 *  OnSuccess
 *  OnError
 *  Cost
 */
StripeMarketplaceImplementation.prototype._schemas.profile = new SimpleSchema({
  type: {
    type: String
  },
  onSuccess: {
    type: Function
  },
  onError: {
    type: Function,
    optional: true
  },
  charges: {
    type: Function
  }
});

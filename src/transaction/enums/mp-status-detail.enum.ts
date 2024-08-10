export enum EMpStatusDetail {
  ACCREDITED = 'accredited',
  PENDING_CONTINGENCY = 'pending_contingency',	
  PENDING_REVIEW_MANUAL = 'pending_review_manual',
  CC_REJECTED_BAD_FILLED_DATE = 'cc_rejected_bad_filled_date',
  CC_REJECTED_BAD_FILLED_OTHER = 'cc_rejected_bad_filled_other',
  CC_REJECTED_BAD_FILLED_SECURITY_CODE = 'cc_rejected_bad_filled_security_code',
  CC_REJECTED_BLACKLIST = 'cc_rejected_blacklist',
  CC_REJECTED_CALL_FOR_AUTHORIZE = 'cc_rejected_call_for_authorize',
  CC_REJECTED_CARD_DISABLED = 'cc_rejected_card_disabled',
  CC_REJECTED_DUPLICATED_PAYMENT = 'cc_rejected_duplicated_payment',
  CC_REJECTED_HIGH_RISK = 'cc_rejected_high_risk',
  CC_REJECTED_INSUFFICIENT_AMOUNT = 'cc_rejected_insufficient_amount',
  CC_REJECTED_INVALID_INSTALLMENTS = 'cc_rejected_invalid_installments',
  CC_REJECTED_MAX_ATTEMPTS = 'cc_rejected_max_attempts',
  CC_REJECTED_OTHER_REASON = 'cc_rejected_other_reason',
}

// Accredited: credited payment.
// pending_contingency: the payment is being processed.
// pending_review_manual: the payment is under review to determine its approval or rejection.
// cc_rejected_bad_filled_date: incorrect expiration date.
// cc_rejected_bad_filled_other: incorrect card details.
// cc_rejected_bad_filled_security_code: incorrect CVV.
// cc_rejected_blacklist: the card is in the denial list, being present in problems related to theft/complaints/fraud.
// cc_rejected_call_for_authorize: the payment method requires prior authorization of the transaction value.
// cc_rejected_card_disabled: the card is inactive.
// cc_rejected_duplicated_payment: duplicated transaction.
// cc_rejected_high_risk: rejected by Fraud Prevention.
// cc_rejected_insufficient_amount: insufficient amount.
// cc_rejected_invalid_installments: invalid number of installments.
// cc_rejected_max_attempts: maximum number of attempts exceeded.
// cc_rejected_other_reason: generic error.
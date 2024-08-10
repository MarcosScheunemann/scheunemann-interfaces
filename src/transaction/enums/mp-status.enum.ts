export enum EMpStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  AUTHORIZED = 'authorized',
  IN_PROCESS = 'in_process',
  IN_MEDIATION = 'in_mediation',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  CHARGED_BACK = 'charged_back',
}

// É o estado atual do pagamento. Podem ser ser dos seguintes tipos.
// pending: The user has not concluded the payment process (for example, by generating a payment by boleto, it will be concluded at the moment in which the user makes the payment in the selected place).
// approved: The payment has been approved and credited.
// authorized: The payment has been authorized but not captured yet.
// in_process: The payment is in analysis.
// in_mediation: The user started a dispute.
// rejected: The payment was rejected (the user can try to pay again).
// cancelled: Either the payment was canceled by one of the parties or expired.
// refunded: The payment was returned to the user.
// charged_back: A chargeback was placed on the buyer's credit card.
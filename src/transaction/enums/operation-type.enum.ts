export enum EOperationType {
  // mp enums :
  INVESTMENT = 'investment',
  REGULAR_PAYMENT = 'regular_payment',
  MONEY_TRANSFER = 'money_transfer',
  RECURRING_PAYMENT = 'recurring_payment',
  ACCOUNT_FUND = 'account_fund',
  PAYMENT_ADDITION = 'payment_addition',
  CELLPHONE_RECHARGE = 'cellphone_recharge',
  POS_PAYMENT = 'pos_payment',
  MONEY_EXCHANGE = 'money_exchange',

  // arcnet enums :
  FEE_SHIPPING = 'Taxa de Entrega',
  FEE_CONVENIENCE = 'Taxa de Conveniencia',
  NATI_PAY = 'Nati Pay',
  GOLIVE = 'Go Live',
  FIN_TAX = 'Taxa Financeira',
  WITHDRAW = 'Saque em Conta',
}
export { EOperationType as ESponsorIdentifier };

// É o tipo de pagamento. Os tipos disponíveis são os seguintes.
// investment: When money is put into an investment, such as CDB, in the Mercado Pago application;
// regular_payment: Typification by default of a purchase being paid using Mercado Pago.
// money_transfer: Funds transfer between two users.
// recurring_payment: Automatic recurring payment due to an active user subscription.
// account_fund: Money income in the user's account.
// payment_addition: Addition of money to an existing payment, made through a Mercado Pago account.
// cellphone_recharge: Recharge of a user's cellphone account.
// pos_payment: Payment done through a Point of Sale.
// money_exchange: Payment to exchange currency for a user.

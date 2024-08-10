export enum EPaymentTypeId {
  TICKET = 'ticket',
  BANK_TRANSFER = 'bank_transfer',
  ATM = 'atm',
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  PREPAID_CARD = 'prepaid_card',
  DIGITAL_CURRENCY = 'digital_currency',
  DIGITAL_WALLET = 'digital_wallet',
  VOUCHER_CARD = 'voucher_card',
  CRYPTO_TRANSFER = 'crypto_transfer',
}

// É o tipo da forma de pagamento (cartão, transferência bancária, boleto, caixa eletrônico, etc). Podem ser dos seguintes tipos.
// ticket: Boletos, Caixa Electronica Payment, PayCash, Efecty, Oxxo, etc.
// bank_transfer: Pix e PSE (Pagos Seguros en Línea).
// atm: Pagamento em caixa eletrônico (amplamente utilizado no México através do BBVA Bancomer).
// credit_card: Pagamento com cartão de crédito.
// debit_card: Pagamento com cartão de débito.
// prepaid_card: Pagamento com cartão pré-pago.
// digital_currency: Compras com Mercado Crédito.
// digital_wallet: Paypal.
// voucher_card: Benefícios Alelo e Sodexo.
// crypto_transfer: Pagamento com criptomoedas como Ethereum e Bitcoin.
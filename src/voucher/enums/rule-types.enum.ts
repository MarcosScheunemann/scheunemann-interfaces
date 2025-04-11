export enum EVoucherRuleType {
  FIRST_BUY = 'FIRST_BUY',
  BIRTHDAY = 'BIRTHDAY', // se é aniversário
  ONE_BY_USER = 'ONE_BY_USER',
  ONE_BY_DAY = 'ONE_BY_DAY',
  IN_PAYMENT_ID = 'IN_PAYMENT_ID',
  MIN_VALUE = 'MIN_VALUE',
  SHIFT_START_AT = 'SHIFT_START_AT', // horário de início do uso
  SHIFT_END_AT = 'SHIFT_END_AT', // horário de término do uso
  START_AT = 'START_AT', // data de início do uso
  END_AT = 'END_AT', // data de término do uso
}

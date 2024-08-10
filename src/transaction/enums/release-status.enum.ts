export enum EReleaseStatus {
  RELEASED = 'released',
  PENDING = 'pending',
}
// Data em que o pagamento é liquidado e o dinheiro é disponibilizado na conta Mercado Pago do Collector (aquele que recebe o pagamento). O campo pode assumir os valores “pending” ou “released”, sendo que o primeiro indica que o pagamento ainda não foi liberado (dinheiro retido por tempo) e “released” significa que o dinheiro já foi liberado para o saldo disponível do usuário.

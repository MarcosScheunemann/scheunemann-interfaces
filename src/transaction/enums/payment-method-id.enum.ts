export enum EPaymentMethodId {
  ACCOUNT_MONEY = 'account_money',
  PIX = 'pix',
  TED = 'ted',
  // casos internacionais
  DEBIN_TRANSFER = 'debin_transfer',
  CVU = 'cvu',
  PSE = 'pse',
}

// Indica o identificador do meio de pagamento selecionado para efetuar o pagamento. A seguir, apresentamos alguns exemplos. Obtenha todos os meios de pagamento disponíveis consultando a API de 'Obter meios de pagamento'.
// Pix: Método de pagamento digital instantâneo utilizado no Brasil.
// Debin_transfer: Método de pagamento digital utilizado na Argentina que debita imediatamente um valor da conta, solicitando autorização prévia.
// Ted: É o pagamento por Transferência Eletrônica Disponível, usado no Brasil, que possui taxas de utilização. O pagamento é realizado no mesmo dia da transação, mas para isso, é necessário realizar a transferência dentro do período estipulado.
// CVU: Método de pagamento utilizado na Argentina.
// PSE: Método de pagamento digital utilizado na Colômbia, no qual os usuários autorizam o débito de fundos de seu banco por meio da banca virtual, seja de suas contas de poupança, corrente ou depósito eletrônico.
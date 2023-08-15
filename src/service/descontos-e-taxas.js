import { FormasDePagamento } from "../model/formasDePagamento.js";

export function descontosETaxas(conta, formaDePagamento) {
  //aplicando desconto de acordo com a forma de pagamento
  const formasDePagamento = new FormasDePagamento().itens;

  for (let i = 0; i < formasDePagamento.length; i++) {
    if (formasDePagamento[i].tipo === formaDePagamento) {
      if (formasDePagamento[i].desconto) {
        conta = conta - conta * (formasDePagamento[i].desconto / 100);
        i = formasDePagamento.length;
      } else if (formasDePagamento[i].taxa) {
        conta = conta + conta * (formasDePagamento[i].taxa / 100);
        i = formasDePagamento.length;
      } else if (!formasDePagamento[i].desconto && !formasDePagamento[i].taxa) {
        i = formasDePagamento.length;
      }
    } else if (i === formasDePagamento.length - 1) {
      return "Forma de pagamento inválida!";
    }
  }
  const valorFormatado = conta.toFixed(2).replace(".", ",");

  return `R$ ${valorFormatado}`;
}

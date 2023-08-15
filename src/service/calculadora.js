import { Cardapio } from "../model/cardapio.js";
import { verificarItemExtra } from "./verificar-item-extra.js";
import { descontosETaxas } from "./descontos-e-taxas.js";
import { verificarPedido } from "./verificar-pedido.js";

function Calculadora(formaDePagamento, pedidos) {
  if (!pedidos.length) {
    return "Não há itens no carrinho de compra!";
  }

  const pedido = [];

  //Separando codigo e quantidade do pedido [i][0] = codigo ; [i][1] = quantidade
  pedidos.forEach((data) => {
    pedido.push(data.split(","));
  });

  for (let i = 0; i < pedido.length; i++) {
    if (pedido[i][1] <= 0) {
      return "Quantidade inválida!";
    }
  }

  //Instanciando cardapio com os itens
  const cardapio = new Cardapio().itens;
  const comanda = [];

  const pedidoInvalido = verificarPedido(pedido, cardapio);
  if (pedidoInvalido) {
    return pedidoInvalido;
  }

  // Percorrendo cardapio e anotando pedido na comanda
  for (let i = 0; i < cardapio.length; i++) {
    for (let j = 0; j < pedido.length; j++) {
      if (cardapio[i].codigo === pedido[j][0]) {
        comanda.push(cardapio[i]);
      }
    }
  }

  //validacao de item principal e extra
  for (let i = 0; i < comanda.length; i++) {
    if (comanda[i].vinculo.length > 0) {
      if (!verificarItemExtra(comanda, comanda[i].vinculo)) {
        return "Item extra não pode ser pedido sem o principal";
      }
    }
  }

  //Calculo da conta
  let conta = 0;
  for (let i = 0; i < comanda.length; i++) {
    for (let j = 0; j < pedido.length; j++) {
      if (comanda[i].codigo === pedido[j][0]) {
        conta += comanda[i].valor * pedido[j][1];
      }
    }
  }

  return descontosETaxas(conta, formaDePagamento);
}

export { Calculadora };

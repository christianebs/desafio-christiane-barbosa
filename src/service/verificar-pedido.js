export function verificarPedido(pedido, cardapio) {
  //verificar se codigo existe
  let codigosPedidos = [];
  let codigosCardapio = [];

  for (let i = 0; i < pedido.length; i++) {
    codigosPedidos.push(pedido[i][0]);
  }
  for (let i = 0; i < cardapio.length; i++) {
    codigosCardapio.push(cardapio[i].codigo);
  }
  for (let i = 0; i < codigosPedidos.length; i++) {
    if (!codigosCardapio.includes(codigosPedidos[i])) {
      return "Item inválido!"
    }
  }
}

class FormasDePagamento {
  constructor() {
    this.itens = [
      { tipo: "dinheiro", desconto: 5, taxa: null },
      { tipo: "debito", desconto: null, taxa: null },
      { tipo: "credito", desconto: null, taxa: 3 },
    ];
  }
}
export { FormasDePagamento };

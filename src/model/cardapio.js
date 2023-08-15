class Cardapio {
  constructor() {
    this.itens = [
      { codigo: "cafe", descricao: "Café", valor: 3.0, vinculo: [] },
      { codigo: "chantily", descricao: "Chantily (extra do Café)", valor: 1.5, vinculo: ["cafe"] },
      { codigo: "suco", descricao: "Suco Natural", valor: 6.2, vinculo: [] },
      { codigo: "sanduiche", descricao: "Sanduíche", valor: 6.5, vinculo: [] },
      {
        codigo: "queijo",
        descricao: "Queijo (extra do Sanduíche)",
        valor: 2.0, vinculo: ["sanduiche"]
      },
      { codigo: "salgado", descricao: "Salgado", valor: 7.25, vinculo: [] },
      { codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 9.5, vinculo: ["suco", "sanduiche"] },
      { codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 7.5, vinculo: ["cafe", "sanduiche"] },
    ];
  }
}

export { Cardapio };
import { Calculadora } from "./service/calculadora.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    const resultado = Calculadora(metodoDePagamento, itens);
    return resultado;
  }
}

export { CaixaDaLanchonete };

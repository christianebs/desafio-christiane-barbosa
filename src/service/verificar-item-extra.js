export function verificarItemExtra(comanda, itensExtras) {
    let encontrado = false;
    let codigos = [];
    for (let i = 0; i < comanda.length; i++) {
      codigos.push(comanda[i].codigo);
    }
    encontrado = itensExtras.every((item) => codigos.includes(item));
    return encontrado;
  }
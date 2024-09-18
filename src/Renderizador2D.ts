import Renderizador from "./Renderizar";

export default class Renderizador2D implements Renderizador {
  renderizarForma(forma: string): void {
    console.log(`Forma Renderizada: ${forma}`);
    console.log(`Tipo de Renderização: 2D`);
  }
}

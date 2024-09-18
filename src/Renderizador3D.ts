import Renderizador from "./Renderizar";

export default class Renderizador3D implements Renderizador {
  renderizarForma(forma: string): void {
    console.log(`Forma Renderizada: ${forma}`);
    console.log(`Tipo de Renderização: 3D`);
  }
}

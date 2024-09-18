import { Forma } from "./Forma";

export default class Quadrado extends Forma {
  renderizarForma(): void {
    console.log("Renderizar Quadrado");
    this.renderizar.renderizarForma("Quadrado");
  }
}

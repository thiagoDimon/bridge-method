import { Forma } from "./Forma";

export default class Circulo extends Forma {
  renderizarForma(): void {
    console.log("Renderizar Circulo");
    this.renderizar.renderizarForma("Circulo");
  }
}

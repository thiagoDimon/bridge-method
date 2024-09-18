import Renderizador from "./Renderizar";

export abstract class Forma {
  protected renderizar: Renderizador;

  constructor(renderizar: Renderizador) {
    this.renderizar = renderizar;
  }

  abstract renderizarForma(): void;
}

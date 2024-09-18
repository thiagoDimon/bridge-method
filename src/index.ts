import Circulo from "./Circulo";
import Quadrado from "./Quadrado";
import Renderizador2D from "./Renderizador2D";
import Renderizador3D from "./Renderizador3D";

const renderizacao2D = new Renderizador2D();
const renderizacao3D = new Renderizador3D();

console.log("------------------------------");

const circulo2D = new Circulo(renderizacao2D);
const quadrado2D = new Quadrado(renderizacao2D);

circulo2D.renderizarForma();
quadrado2D.renderizarForma();

console.log("------------------------------");

const circulo3D = new Circulo(renderizacao3D);
const quadrado3D = new Quadrado(renderizacao3D);

circulo3D.renderizarForma();
quadrado3D.renderizarForma();

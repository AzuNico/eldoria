import { abrirPortal } from "./src/ejercicios/pe/00-abrir-portal/index.js";
import {
  recolectar,
  recolectarForOf,
} from "./src/ejercicios/pe/01-recolectar-cristales/index.js";


// Reino aca vive mi programa
function Eldoria() {
  // ---------Ejercicio 1 -------------------

  let poder = 150;
  let energia = 50;
  const palabraMagica = "Eldoria";

  abrirPortal(poder, energia, palabraMagica);
  
  // --------------Ejercicio 2----------------
  let rojo = 10;
  let verde = 25;
  let violeta = 40;
  let azul = 15;
  let amarillo = 30;
  const cristales = [rojo, verde, violeta, azul, amarillo];

  recolectar(cristales);
  recolectarForOf(cristales);
}

export default Eldoria;

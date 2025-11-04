/**
 * 🎣 Ejercicio: Pesca en Eldoria
 *
 * Contexto:
 *
 * Despues de explorar tanto, te dió hambre y decidiste ir a pescar a un lago cercano.
 * Tu objetivo es pescar un pez usando tu caña de pescar mágica.
 *
 * - Usar un bucle while para seguir lanzando la caña hasta pescar un pez.
 * - Cada intento tiene un 30% de probabilidad de éxito.
 * - Contar y mostrar el número de intentos realizados.
 *
 * Indicaciones:
 * - Inicializa sacastePez = false y intentos = 0.
 * - Dentro del while:
 *     1. Usar la función "preguntar" de la siguiente manera para esperar la acción del usuario:
 *          await preguntar("🎣 Presiona Enter para lanzar la caña...");
 *     2. Incrementar intentos.
 *     3. Usar probabilidad(30) para decidir si pescaste:
 *         - true → sacastePez = true y mostrar mensaje de éxito => "¡Felicidades! Has pescado un pez en X intentos."
 *         - false → mostrar mensaje de intento fallido => "Intento X: No pescaste nada. Intenta de nuevo."
 *     4. Al finalizar el bucle, mostrar el total de intentos realizados.
 *     5. Opcional: agregar un límite máximo de intentos (ej. 10) para evitar bucles infinitos.
 *
 * - Terminar el bucle cuando sacastePez sea true o se alcance el límite de intentos.
 *
 * Funciones útiles: impirimir, preguntar, probabilidad.
 */

import { imprimir, preguntar, probabilidad } from "../../../../utils.js";

export async function pescarEnElLago() {
  let sacastePez = false;
  let intentos = 0;
  const maxIntentos = 10;

  // Inicia el bucle para pescar
  imprimir("Estoy pescando en el lago...");
  imprimir("Otra cosa....");

  const respuesta = await preguntar("Presiona Enter para continuar...");

  imprimir(`Has respondido: ${respuesta}`);


  const sacasteElPez = probabilidad(0);
  if (sacasteElPez) {
    imprimir("¡Felicidades! Has pescado un pez.");
  } else {
    imprimir("No pescaste nada. Intenta de nuevo.");
  }

}

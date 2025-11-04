import readline from "readline/promises";

/**
 * Pregunta al usuario por la consola y espera su respuesta.
 * 
 * @param {string} mensaje - El mensaje que se muestra al usuario.
 * @returns {Promise<string>} - Devuelve lo que el usuario escriba como string.
 * 
 * Ejemplo de uso:
 * @example
 * ```
 * const respuesta = await preguntar("¿Quieres continuar? (s/n): ");
 * if (respuesta.toLowerCase() === "s") { ... }
 * ```
 */
export async function preguntar(mensaje) {
  const rl = readline.createInterface({
    input: process.stdin,   // Entrada estándar de la consola
    output: process.stdout, // Salida estándar (mensaje en pantalla)
  });

  const respuesta = await rl.question(mensaje);
  rl.close();
  return respuesta;
}

/**
 * Determina si ocurre un evento basado en una probabilidad.
 * 
 * @param {number} porcentaje - Porcentaje de probabilidad (0 a 100)
 * @returns {boolean} - true si ocurre el evento, false si no.
 * 
 * Ejemplo de uso:
 * @example
 * ```
 * if (probabilidad(30)) { 
 *   console.log("Ocurrió algo con 30% de chance"); 
 * }
 * ```
 */
export function probabilidad(porcentaje) {
  return Math.random() < porcentaje / 100;
}

/**
 * Imprime un mensaje en la consola.
 * 
 * @param {string} mensaje - Texto que se mostrará en la consola.
 * 
 * Ejemplo de uso:
 * @example
 * ```
 * imprimir("Hola, mundo!");
 * ```
 */
export function imprimir(mensaje) {
  console.log(mensaje);
}

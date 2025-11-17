/**
 * EJERCICIO 3 – Batalla en Eldoria (continuación del ejercicio 1 y 2)
 * -------------------------------------------------------------------
 * En los ejercicios anteriores creaste:
 * - La clase Arma (con nombre, daño base, etc.)
 * - La interfaz IEncantable
 * - El método encantar() para volver un arma mágica
 * - Varias armas concretas (Espada, Hacha, Báculo, etc.)
 *
 * En este ejercicio vas a reutilizar esas armas para crear un combate
 * entre un Héroe y un Dragón.
 *
 * REQUISITOS
 * ==========
 * 1) Crear la interfaz "Atacable" con el método:
 *       recibirDanio(cantidad: number): void
 *
 * 2) Crear la interfaz "Combatiente" con el método:
 *       atacar(objetivo: Atacable): void
 *
 * 3) Crear la clase "SerVivo":
 *       - Debe tener puntosVida
 *       - Método estaVivo() → boolean retorna true si puntosVida > 0
 *       - Implementa Atacable:
 *             * recibirDanio(cantidad: number) → resta puntosVida
 *               Si puntosVida < 0, setear a 0
 * 4) Crear la clase "Heroe":
 *       - Extiende (Hereda) de SerVivo
 *       - Implementa Combatiente
 *       - Debe recibir un arma creada en los ejercicios anteriores
 *       - El método atacar() debe:
 *             * pedir a su arma el daño mediante arma.calcularDanio()
 *             * aplicar el daño al objetivo usando objetivo.recibirDanio(daño)
 *
 * 5) Crear la clase "Dragon":
 *       - Extiende (Hereda) de SerVivo
 *       - Implementa Combatiente
 *       - Su ataque es fuego, con un daño fijo (por ejemplo 12):
 *            * El método atacar() debe aplicar ese daño al objetivo
 *             usando objetivo.recibirDanio(daño)
 *            * Existe la posibilidad de que el dragón falle su ataque (20% de chance)
 *            Si falla, no debe aplicar daño.
 *            * Existe un 10% de chance de que el dragón haga un ataque crítico,
 *           que duplica el daño (24 en vez de 12).
 * 
 *
 * 6) Simular un combate:
 *       - Crear un héroe con un arma creada en los ejercicios 1/2
 *       - Encantar esa arma usando el método encantar() ya implementado
 *       - Crear un dragón
 *       - Alternar ataques entre ellos hasta que uno muera
 *       - Mostrar en consola cada ataque y el estado de los combatientes
 *       - Al final, mostrar quién ganó
 *
 * OBJETIVO
 * ========
 * - Reutilizar el código de los ejercicios anteriores (armas y encantamientos)
 * - Practicar herencia (SerVivo)
 * - Practicar interfaces (Combatiente, Atacable)
 * - Separar responsabilidades:
 *          * El arma solo calcula daño
 *          * El héroe y el dragón son quienes atacan
 *
 * BONUS (opcional)
 * ================
 * - Permitir que el dragón tenga un ataque secundario (mordida)
 * - Darle nombres al héroe y al dragón
 * - Mostrar un log de combate detallado estilo RPG
 *
 * 
 */

/* 
====================================================
 EJERCICIO 2 — Encantar armas
====================================================

En este ejercicio mejorarás la magia de Eldoria: ahora las armas del ejercicio 1 (00-forjar-armas.ts) pueden ser encantadas
con poderes especiales.

1) Crear la interfaz IEncantable:

   interface IEncantable {
     encantar(encantamiento: Encantamiento): void;
     obtenerEncantamiento(): Encantamiento | null;
   }

2) Crear la clase base Encantamiento:

   class Encantamiento {
     calcularBonus(danioBase: number): number {
       return 0; // por defecto no suma nada
     }
   }

3) Crear clases de encantamientos concretos que HEREDEN de Encantamiento:
   - class Fuego extends Encantamiento
        • calcularBonus → +5
   - class Hielo extends Encantamiento
        • calcularBonus → +20% del daño base
   - class Sagrado extends Encantamiento
        • calcularBonus → +10

   Cada encantamiento redefine calcularBonus(danioBase).

4) Modificar Espada, Hacha y Báculo para implementar IEncantable:
   - Agregar atributo privado encantamiento: Encantamiento | null (inicialmente null)
   - Implementar encantar(encantamiento: Encantamiento): void
   - Implementar obtenerEncantamiento()
   - En el método obtenerDaño():
        - tomar el daño base del arma
        - si tiene encantamiento:
              dañoTotal = danioBase + encantamiento.calcularBonus(danioBase)

5) Probar:
   - Crear un arma del ejercicio 1
   - Mostrar su daño normal
   - Encantarla con un encantamiento de Fuego, Hielo o Sagrado
   - Mostrar el daño aumentado tras el encantamiento

Objetivos POO:
- Interfaces (IEncantable)
- Herencia (Encantamiento → Fuego, Hielo, etc.)
- Polimorfismo (cada encantamiento modifica el daño de forma distinta)
- Composición (el arma contiene un Encantamiento)

*/

/*  Tu código aquí 👇🏼 */

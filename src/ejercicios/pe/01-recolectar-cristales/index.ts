// Al cruzar el portal, te encontrás en un valle lleno de cristales de energía.
// Cada cristal contiene un valor de poder mágico.

// 🧙‍♂️ Instrucciones:

// Creá un array llamado cristales con los valores: [10, 25, 40, 15, 30].

// Recorrelos con un for y sumá el total de poder.

// Mostrá en consola:
// "💎 Has recolectado X puntos de energía mágica."

// 💡 Desafío: usá un for...of o un método como .forEach().

let rojo = 10;
let verde = 25;
let violeta = 40;
let azul = 15;
let amarillo = 30;
const cristales = [rojo, verde, violeta, azul, amarillo];

export function recolectar(cristales: number[]) {
  let poder = 0;
  // Imperativo
  for (let i = 0; i <= cristales.length - 1; i++) {
    poder = poder + cristales[i];
  }

  console.log("💎 Has recolectado " + poder + " puntos de energía mágica.");
}

export function recolectarForOf(cristales: number[]) {
  let poder = 0;
  // Usando for...of
  for (const cristal of cristales) {
    poder = poder + cristal;
  }

  console.log("💎 Has recolectado " + poder + " puntos de energía mágica. Desde For Of");
}


export function recolectarForEach(cristales: number[]) {}

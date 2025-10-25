/*
El portal solo se abrirá si:

- poder es mayor o igual a 150
- energia es mayor o igual a 50
- palabraMagica es exactamente "Eldoria"

👉 En ese caso, mostrar en consola:
"✨ El aire vibra... el portal se abre ante ti. ¡Bienvenido a Eldoria!"
y retornar true.

Si la palabra mágica es incorrecta:

Mostrar en consola:
"🔒 La palabra resuena en vano... el portal permanece cerrado."
y retornar false.

Si el poder o la energía no son suficientes:

Mostrar en consola:
"💀 No tenés la fuerza necesaria. El portal te rechaza."
y retornar false.

Desafío adicional (opcional)

- Pedí al usuario la palabra mágica con prompt("Ingresa la palabra Mágica para abrir el portal").

- Permití hasta 3 intentos. Si falla los tres, mostrar:
"🌀 El portal se sella y la energía mágica desaparece...".


*/

/**
Función Abre Portal
para abrirlo necesitas tener un poder 150 y una energia de 100 y decir la palabra mágica Eldoria
 */
export function abrirPortal(
  poder: number,
  energia: number,
  palabraMagica: string
): boolean {
  // TRABAJA ACÁ
  const abrePortal = poder >= 150 && energia >= 50 && palabraMagica == 'Eldoria';

  if (abrePortal) {
    console.log(
      '✨ El aire vibra... el portal se abre ante ti. ¡Bienvenido a Eldoria!'
    );
    return true;
  }

  console.log('El portal permanece cerrado');
    return false;
}

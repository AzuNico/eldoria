// Transforma cada número multiplicando por 2
[1, 2, 3].map(n => n * 2); // 👉 [2, 4, 6]

// Filtra la comida carnívora
['🥝', '🥦', '🍖'].filter(n => n !== '🍖'); // 👉 ['🥝', '🥦']

// Encuentra y devuelve la gallina
['🦖', '🦕', '🐔'].find(n => n === '🐔'); // 👉 '🐔'

// Dime el índice de la gallina
['🦖', '🦕', '🐔'].findIndex(n => n === '🐔'); // 👉 2

// ¡Rellena los elementos del Array con dinero!
['', '', ''].fill('💰'); // 👉 ['💰', '💰', '💰']

// ¿Todo está OK?
['✅', '❌', '✅'].every(n => n === '✅'); // 👉 false

// ¿Hay algún error?
['✅', '❌', '✅'].some(n => n === '❌'); // 👉 true

// Recorre y muestra cada elemento (forEach)
['🔥', '💎', '⚔️'].forEach((item, index) => {
  console.log(`Elemento ${index + 1}: ${item}`);
});
// Imprime:
// Elemento 1: 🔥
// Elemento 2: 💎
// Elemento 3: ⚔️

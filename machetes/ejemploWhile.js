import { confirm } from "@inquirer/prompts";
import { imprimir } from "../utils.js";

let dormammuAcepta = false;
let intentos = 0;

while (!dormammuAcepta) {
  intentos++;
  imprimir(`Intento ${intentos}: "¡Dormammu, he venido a negociar!"`);
  
  const acepta = await confirm({ message: "¿Aceptas la negociación, Dormammu?" });
  
  if (acepta) {
    dormammuAcepta = true;
  } else {
    imprimir("💥 Dormammu rechaza la oferta... el bucle se reinicia.\n");
  }
}

imprimir(`🌀 Después de ${intentos} bucles, Dormammu finalmente acepta negociar.`);

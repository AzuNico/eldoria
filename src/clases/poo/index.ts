class Mascota {
  private nombre: string = "";
  private edad: number = 0;
  private peso: number = 0;
  private raza: string = "";
  private pelaje: string = "";

  constructor(
    nombre: string,
    edad: number,
    peso: number,
    raza: string,
    pelaje: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.raza = raza;
    this.pelaje = pelaje;
  }

  nombrar(nombreNuevo: string): void {
    this.nombre = nombreNuevo;
  }

  hacerSonido(): string {
    return "Sonido genérico de mascota";
  }
}

const miMascota = new Mascota("Firulais", 3, 15, "Labrador", "Corto");
const otraMascota = new Mascota("Michi", 2, 5, "Siames", "Largo");

// miMascota.edad = 4; // <-- viola el principio de encapsulamiento

// miMascota.nombrar("Max");
// console.log(miMascota);
// console.log(miMascota.hacerSonido());

class Perro extends Mascota implements IPaseable {
  constructor() {
    super("Firulais", 3, 15, "Labrador", "Corto");
  }

  hacerSonido(): string {
    return "Guau Guau";
  }

  caminar(distancia: number): void {
    console.log(`El perro ha caminado ${distancia} metros.`);
  }
}

const miPerro = new Perro();
console.log(miPerro);
// miPerro.nombrar("Rex");
console.log(miPerro);

// console.log("--Mi Perro---");
// console.log(miPerro.hacerSonido());
// console.log("--Mi Mascota---");
// console.log(miMascota.hacerSonido());

class Gato extends Mascota {
  constructor() {
    super("Michi", 2, 5, "Siames", "Largo");
  }

  hacerSonido(): string {
    return "Miau Miau";
  }
}

const miGato = new Gato();

console.log("--Mi Gato---");
console.log(miGato.hacerSonido());

const mascotas: Mascota[] = [miPerro, miGato];

console.log("--Sonidos de las mascotas---");
mascotas.forEach((mascota) => {
  console.log(mascota.hacerSonido());
  console.log(mascota.caminar?.(10)); // <-- No todas las mascotas son paseables
});

interface IPaseable {
  caminar(distancia: number): void;
}

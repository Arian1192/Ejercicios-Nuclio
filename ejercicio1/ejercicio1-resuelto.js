/**
 * Dado un array de productos con precios en una tabla (array bidimensional), hacer lo siguiente:
 * 1. Filtrar solo los precios que sean números pares.
 * 2. Ordenar esos precios de mayor a menor.
 * 3. Convertir la tabla en un solo array (array unidimensional).
 * 4. Mostrar el resultado en la consola.
 * 5. Calcular y mostrar la suma total de los precios filtrados.
 */

const products = [
  ["Laptop", 1200],
  ["Mouse", 25],
  ["Monitor", 150],
  ["Teclado", 45],
  ["USB", 15],
  ["Macbook Pro", 12000],
];

// Solución 1

// Usando flat ( experimental )
const flatArray = products
  .flat([1]) // Aplana el array a un nivel
  .filter((product) => typeof product === "number" && product % 2 === 0)
  .sort((a, b) => b - a);

console.log(flatArray);

const total = flatArray.reduce((acc, price) => acc + price, 0);
console.log("Solución 1:", total);

// Solución 2

const flatArray1 = products
  .filter((product) => product[1] % 2 === 0) // Filtramos los precios pares
  .sort((a, b) => b[1] - a[1]) // Ordenamos de mayor a menor
  .reduce((acc, product) => acc.concat(product[1]), []); // Convertimos a un array unidimensional usando reduce Ojo lo que hacemos no es obtener un valor unico si no "eliminar un nivel de anidamiento"
console.log(flatArray1);

const total1 = flatArray1.reduce((acc, price) => acc + price, 0);
console.log("Solución 2:", total);

// Solución 3
const flatArray2 = products
  .filter(([, price]) => price % 2 === 0)
  .map(([, price]) => price)
  .sort((a, b) => b - a);

console.log(flatArray2);
const total2 = flatArray2.reduce((acc, price) => acc + price, 0);

console.log("Solución 3:", total2);

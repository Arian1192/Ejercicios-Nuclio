/**
 * Dado un array de productos con información de inventario:
 * 1. Filtrar y conservar solo los productos que están en stock (cantidad mayor a 0)
 * 2. Añadir una nueva propiedad "valor_total" a cada producto, que multiplica el precio por la cantidad
 * 3. Ordenar los productos por su valor_total de mayor a menor
 * 4. Devolver un objeto con:
 *    - productos_disponibles: número total de productos diferentes que están en stock
 *    - valor_inventario: suma de todos los valores_total
 *    - categorias: lista de categorías sin repeticiones
 */
const inventario = [
  {
    id: 1,
    nombre: "Laptop HP",
    precio: 850,
    cantidad: 5,
    categoria: "Electrónica",
  },
  {
    id: 2,
    nombre: "Mouse Gamer",
    precio: 45,
    cantidad: 0,
    categoria: "Accesorios",
  },
  {
    id: 3,
    nombre: "Monitor 24'",
    precio: 320,
    cantidad: 3,
    categoria: "Electrónica",
  },
  {
    id: 4,
    nombre: "Teclado Mecánico",
    precio: 95,
    cantidad: 10,
    categoria: "Accesorios",
  },
  {
    id: 5,
    nombre: "Auriculares Bluetooth",
    precio: 120,
    cantidad: 0,
    categoria: "Audio",
  },
  {
    id: 6,
    nombre: "Disco SSD",
    precio: 175,
    cantidad: 8,
    categoria: "Componentes",
  },
];

// Implementa tu solución
const resultado = inventario
  .filter((producto) => producto.cantidad > 0)
  .map((producto) => {
    producto = {
      ...producto,
      valor_total: producto.precio * producto.cantidad,
    };
    return producto;
  })
  .sort((a, b) => b.valor_total - a.valor_total);

const categorias = resultado.map((producto) => producto.categoria);

// Opción 1
let categoriasUnicas1 = [];
resultado.forEach((producto) => {
  if (!categoriasUnicas1.includes(producto.categoria)) {
    categoriasUnicas1.push(producto.categoria);
  }
});

// Opcion 2
let categoriasUnicas2 = [];

categoriasUnicas2 = resultado.reduce((acc, { categoria }) => {
  if (!acc.includes(categoria)) {
    acc.push(categoria);
  }
  return acc;
}, []);

console.log("Categorias1:", categoriasUnicas1);

console.log("Categorias2:", categoriasUnicas2);

const categoriasUnicas3 = [...new Set(categorias)]; // new Set() crea un cojunto de valores únicos por lo que si hay duplicados los elimina.
// for (const c of categorias) {  // Explicar por que usamos ...SpreadOperator
//   console.log(c);
// }
const productos_disponibles = resultado.length;
const valor_inventario = resultado.reduce(
  (acc, producto) => acc + producto.valor_total,
  0
);

const respuesta = {
  productos_disponibles,
  valor_inventario,
  categorias: categoriasUnicas3 || categoriasUnicas2 || categoriasUnicas1,
};

console.log(respuesta);

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

const resultado = {};

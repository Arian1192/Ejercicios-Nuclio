/**
 * Dado un array de productos con información de inventario:
 * 1. Crear un nuevo array solo con productos en stock (cantidad > 0)
 * 2. Agregar una propiedad "valor_total" a cada producto que multiplique precio por cantidad
 * 3. Ordenar los productos por valor_total de mayor a menor
 * 4. Devolver un objeto con:
 *    - productos_disponibles: cantidad total de productos diferentes en stock
 *    - valor_inventario: suma de todos los valores_total
 *    - categorias: array de categorías únicas (sin duplicados)
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
// Debería mostrar algo como:
// {
//   productos_disponibles: 4,
//   valor_inventario: 7235,
//   categorias: ["Electrónica", "Accesorios", "Componentes"]
// }
const resultado = {};

/*
Enunciado del ejercicio:
A partir del objeto data, usa desestructuración para obtener los siguientes valores:

Nivel 3 de anidación:
Obtener el sonido de las notificaciones push (push.sound).

Nivel 2 de anidación:
Obtener el correo electrónico del usuario (contacts.email).

⚠️ No puedes acceder a las propiedades directamente usando data.user.settings.notifications.push.sound,
debes usar la técnica de desestructuración.

📌 Consejo: Recuerda que puedes usar nombres alternativos (alias) en la desestructuración 
si quieres dar nuevos nombres a las variables obtenidas.

Recuerda importar el objeto data desde el archivo data.js.

Ejemplo de implementación:
Primero importamos los datos
*/

const data = require("./data");

// si queremos ver el objeto data podemos hacerlo con console.log
console.log(data);

// Solución 1

// Buscamos el sonido de las notificaciones push

const {
  user: {
    settings: {
      notifications: {
        push: { sound: soundFound },
      },
    },
  },
} = data;

// Buscamos el email del usuario

const {
  user: {
    contacts: { email: emailFound },
  },
} = data;

// Buscamos el precio del monitor

const { orders } = data;
const { items } = orders[1];
const { price: monitoPrice } = items[1];

console.log(soundFound);
console.log(emailFound);
console.log(monitoPrice);

// Solución 2

// Buscamos el sonido de las notificaciones push

const { user } = data;
const { settings, contacts } = user;
const { notifications } = settings;
const { push } = notifications;
const { sound: soundFound1 } = push;

// Busando la desestructuración de contacts para obtener el email
const { email: emailFound1 } = contacts;

// Buscando el precio del monitor

const { orders: orders1 } = data;
const [, secondItem] = orders;
const { items: items1 } = secondItem;
const [, monitor] = items1;
const { price: monitorPrice1 } = monitor;

console.log(soundFound1);
console.log(emailFound1);
console.log(monitorPrice1);

const data = {
  user: {
    id: 12345,
    name: {
      first: "Juan",
      last: "Pérez",
    },
    contacts: {
      email: "juan.perez@example.com",
      phone: {
        home: "123-456-789",
        work: "987-654-321",
      },
    },
    addresses: [
      {
        type: "home",
        street: "Calle Falsa 123",
        city: "Madrid",
        country: "España",
      },
      {
        type: "work",
        street: "Avenida Siempre Viva 742",
        city: "Barcelona",
        country: "España",
      },
    ],
    roles: ["admin", "editor"],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: {
          enabled: true,
          sound: "ping",
        },
      },
    },
  },
  orders: [
    {
      id: "A001",
      date: "2025-02-25",
      items: [
        { name: "Laptop", price: 1200, quantity: 1 },
        { name: "Mouse", price: 25, quantity: 2 },
      ],
    },
    {
      id: "A002",
      date: "2025-03-01",
      items: [
        { name: "Teclado", price: 50, quantity: 1 },
        { name: "Monitor", price: 300, quantity: 1 },
      ],
    },
  ],
};

module.exports = data;

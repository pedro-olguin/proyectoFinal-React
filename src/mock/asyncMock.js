const productos = [
  {
    id: 1,
    categoria: "Lomos",
    titulo: "Promo 1",
    descripcion: "Para 2 personas, lomos, papas y bebida",
    precio: 25000,
    img: "https://www.shutterstock.com/shutterstock/photos/372804709/display_1500/stock-photo-tasty-pork-grilled-serranito-sandwich-in-a-ciabatta-with-ham-and-red-pepper-on-a-white-background-372804709.jpg",
    stock: 7,
  },
  {
    id: 2,
    categoria: "Lomos",
    titulo: "Promo 2",
    descripcion: "Para 4 personas, lomos papas y bebida",
    precio: 48000,
    img: "https://www.shutterstock.com/shutterstock/photos/2405195297/display_1500/stock-photo-traditional-peruvian-sandwich-of-roast-beef-in-its-juice-with-avocado-and-white-onion-served-on-2405195297.jpg",
    stock: 5,
  },
  {
    id: 3,
    categoria: "Lomos",
    titulo: "Promo 3",
    descripcion: "Para 6 personas, lomos papas y bebida",
    precio: 70000,
    img: "https://www.shutterstock.com/shutterstock/photos/1950099775/display_1500/stock-photo-argentine-tenderloin-with-french-fries-1950099775.jpg",
    stock: 4,
  },
  {
    id: 4,
    categoria: "Hamburguesas",
    titulo: "Promo 4",
    descripcion: "Para 2 personas, hamburguesas papas y bebida",
    precio: 15000,
    img: "https://www.shutterstock.com/shutterstock/photos/2287033831/display_1500/stock-photo-isolated-double-cheese-burger-with-tomate-lettuce-pickles-sweet-onions-and-sauce-in-a-dark-2287033831.jpg",
    stock: 7,
  },
  {
    id: 5,
    categoria: "Hamburguesas",
    titulo: "Promo 5",
    descripcion: "Para 4 personas, hamburguesas papas y bebida",
    precio: 28000,
    img: "https://www.shutterstock.com/shutterstock/photos/1911547660/display_1500/stock-photo-hamburger-burger-sauce-fries-food-sandwich-1911547660.jpg",
    stock: 5,
  },
  {
    id: 6,
    categoria: "Hamburguesas",
    titulo: "Promo 6",
    descripcion: "Para 6 personas, hamburguesas papas y bebida",
    precio: 40000,
    img: "https://www.shutterstock.com/shutterstock/photos/1938676873/display_1500/stock-photo-two-delicious-homemade-burgers-of-beef-cheese-and-vegetables-on-an-old-wooden-table-fat-unhealthy-1938676873.jpg",
    stock: 4,
  },
  {
    id: 7,
    categoria: "Pizzas",
    titulo: "Promo 7",
    descripcion: "Para 2 personas, pizzas papas y bebida",
    precio: 12000,
    img: "https://www.shutterstock.com/shutterstock/photos/2257266405/display_1500/stock-photo-tasty-hawaiian-pizza-with-chicken-on-wooden-cutting-board-horizontal-2257266405.jpg",
    stock: 7,
  },
  {
    id: 8,
    categoria: "Pizzas",
    titulo: "Promo 8",
    descripcion: "Para 4 personas, pizzas papas y bebida",
    precio: 21000,
    img: "https://www.shutterstock.com/shutterstock/photos/225746563/display_1500/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg",
    stock: 5,
  },
  {
    id: 9,
    categoria: "Pizzas",
    titulo: "Promo 9",
    descripcion: "Para 6 personas, pizzas papas y bebida",
    precio: 30000,
    img: "https://www.shutterstock.com/shutterstock/photos/84904912/display_1500/stock-photo-supreme-pizza-lifted-slice-84904912.jpg",
    stock: 4,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductById = (id) => {
  console.log({ id });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((producto) => producto.id === id));
    }, 2000);
  });
};

export const getProductByCategory = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((producto) => producto.categoria === categoria));
    }, 2000);
  });
};

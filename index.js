express = require("express");
app = express();

const port = 3000;

const clientes = Array(
  {
    id: 1,
    name: "Pepe",
    edad: 17,
  },
  {
    id: 2,
    name: "Juan",
    edad: 18,
  },
  {
    id: 3,
    name: "Maria",
    edad: 19,
  }
);

const productos = Array(
  {
    id: 1,
    nombre: "Camisa",
    precio: 100,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Pantalon",
    precio: 300,
    cantidad: 4,
  },
  {
    id: 3,
    nombre: "Short",
    precio: 200,
    cantidad: 4,
  }
);
app.get("/clientes", function (req, res) {
  res.send(clientes);
});

app.get("/productos", function (req, res) {
  res.send(productos);
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});

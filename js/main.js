// Array para almacenar el menú
const menu = {
  platosPrincipales: [
    { nombre: "Hamburguesa Completa", precio: 40 },
    { nombre: "Pollo al spiedo", precio: 70 },
    { nombre: "Milanesa napolitana", precio: 55 },
    { nombre: "Pizza de rucula y jamon crudo", precio: 50 },
  ],

  acompanamientos: [
    { nombre: "Papas fritas", precio: 30 },
    { nombre: "Ensalada de lechuga y tomate", precio: 15 },
    { nombre: "Pure de calabaza", precio: 25 },
    { nombre: "Tortilla de papa", precio: 35 },
  ],

  bebidas: [
    { nombre: "Gaseosa 2lt", precio: 25 },
    { nombre: "Agua saborizada 500ml", precio: 18 },
    { nombre: "Agua sin gas 500ml", precio: 13 },
    { nombre: "No, gracias", precio: 0 }
  ]
};

// Funcion para seleccionar una opción del menú
function seleccionarOpcion(opciones, valor) {
  let mensaje = `Selecciona un ${valor}. Ingresa el número correspondiente:\n`;
  opciones.forEach((opcion, index) => {
    mensaje += `${index + 1}. ${opcion.nombre} ($${opcion.precio})\n`;
  });

  let seleccion = parseInt(prompt(mensaje)) - 1;

  if (seleccion >= 0 && seleccion < opciones.length) {
    return opciones[seleccion];
  } else {
    alert("Opción no válida. Intenta de nuevo.");
    return seleccionarOpcion(opciones, valor);
  }
}

// Funcion principal
function iniciarPedido() {
  let continuar = true;

  while (continuar) {
  alert("¡Bienvenido a la Rotiseria Delfino!");

  const platoPrincipal = seleccionarOpcion(menu.platosPrincipales, "plato principal");

  const acompanamiento = seleccionarOpcion(menu.acompanamientos, "acompañamiento");

  const bebida = seleccionarOpcion(menu.bebidas, "bebida");

  let total = platoPrincipal.precio + acompanamiento.precio + bebida.precio;

  // Descuento
  let descuento = prompt("¿Como desea abonar? Solo aceptamos efectivo o tarjeta.").toLowerCase();
  
  if (descuento == "efectivo") {
    let descuentoEfectivo = total * 0.10;
    total -= descuentoEfectivo;
    alert(`¡Felicidades! Se te ha aplicado un 10% de descuento. Descuento: $${descuentoEfectivo}`);
  }
  
  // Resumen del pedido en la consola
  console.log("***Resumen del pedido:***");
  console.log(`Plato principal: ${platoPrincipal.nombre} - $${platoPrincipal.precio}`);
  console.log(`Acompañamiento: ${acompanamiento.nombre} - $${acompanamiento.precio}`);
  console.log(`Bebida: ${bebida.nombre} - $${bebida.precio}`);
  console.log(`Método de pago: ${descuento}`);
  console.log(`Total: $${total}`);

  // Mostrar total
  alert(`Tu pedido ha sido registrado. El total es $${total}. Gracias por tu compra.`);

  // Realizar otro pedido
  let respuesta = prompt("¿Deseas realizar otro pedido? (sí/no)").toLowerCase();
  continuar = respuesta === "si";
  }
}

// Ejecutar el programa
iniciarPedido();
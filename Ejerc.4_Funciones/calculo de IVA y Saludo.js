//calcular IVA
function CalcularIva(monto){
    const iva = 0.12;
    const ivaCalculado = monto * iva;
    return ivaCalculado;
  }
  
  const monto = 1000;
  const ivaCalculado = CalcularIva(monto);
  console.log(ivaCalculado); // Devuelve 120
   //Nombre
   function saludar(nombre) {
    return `Hola ${nombre}, bienvenid@`;
   }
   const nombre = "Luis";
   const mensaje = saludar(nombre);
   console.log(mensaje); //devuelve "Hola Luis, bienvenid@"

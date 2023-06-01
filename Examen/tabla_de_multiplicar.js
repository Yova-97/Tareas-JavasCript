//la idea era sacar la tabla del 7 desde 7 * 1 al 10 pero solo llega al 7
let num = 7;
let par = 0;
let cantVeces = 0;

while (num > cantVeces){
    par = par + num;
    cantVeces = cantVeces + 1;
    console.log(num + " * " + cantVeces + " = " + par);
}

//esta es la version corregida del código.
let num2 = 7;

for (let cantVeces = 1; cantVeces <= 10; cantVeces++) {
  let par = num2 * cantVeces;
  console.log(num2 + " * " + cantVeces + " = " + par);
}

  

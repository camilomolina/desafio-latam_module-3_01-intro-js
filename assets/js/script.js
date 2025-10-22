// formateador de números
const formatNumber = new Intl.NumberFormat("es-CL");

// constantes
const MAX_STOCK = 10;
const BASE_PRICE = 400_000;

// valores iniciales
let count = 0;
let total = 0;

let btnPlus = document.getElementById("btn-plus");
let btnMinus = document.getElementById("btn-minus");

print();

btnPlus.addEventListener("click", () => {
  count++;

  // validamos que la cantidad de elementos no supere los 10 registros
  if (count > MAX_STOCK) {
    alert("Ha excedido la cantidad máxima de stock");
    count = MAX_STOCK; // dejamos los registros en el máximo
  }

  print();
});

btnMinus.addEventListener("click", () => {
  count--;

  // validamos que la cantidad de elementos en el carrito, no se vaya a negativo
  if (count < 0) count = 0;

  print();
});

// funcion que pinta los valores en la página
function print() {
  console.log("imprimiendo resultados en html");
  document.getElementById("base-price").innerHTML = `$ ${formatNumber.format(
    BASE_PRICE
  )}.-`;

  document.getElementById("license-count").innerHTML = count;
  document.getElementById("total-price").innerHTML = `$ ${formatNumber.format(
    BASE_PRICE * count
  )}.-`;
}

const button = document.getElementById("btn"); // --- Находим ID элемент в HTML и привязываем его к переменнойю.
const colorspan = document.querySelector(".color"); // --- Находим CLASS элемент в HTML и привязываем его к переменной.

const colors = [
  "#92e02ba",
  "#26a596",
  "#85b08f",
  "#ccab8a",
  "#8dc17f",
  "#ca537d",
  "#23fd22",
  "#9d875e",
  "#392daa",
  "#2e27f9",
  "#467f12",
  "#2290ed",
  "#227b96",
  "#0c2948",
  "#e48e56",
  "#a91f3b",
  "#000aec",
  "#94d18c",
  "#a98cc7",
  "#ad48e2",
  "#471f29",
  "#fa6087",
  "#8bb124",
  "#621fa7",
  "#115d63",
  "#d60f2a",
  "#0da88c",
  "#ef1ca4",
  "#38672c",
  "#f4b519",
  "#0eeea4",
  "#c376e9",
  "#6636b4",
  "#89ac75",
  "#b4ff7e",
  "#06f546",
  "#232780",
  "#1aa1be",
  "#ce854a",
  "#73a9b9",
]; // --- Создаем "палитру" цветов.

button.addEventListener("click", () => {
  let hexcolor = colors[random()];
  document.body.style.backgroundColor = hexcolor;
  colorspan.textContent = hexcolor;
}); // --- Вешаем "Слушатель" и лобовляем событие, создаем переменную, к которой хранится функция "random", в последствие, функция береет рандомный цвет из "палитра цветов".

function random() {
  return Math.floor(Math.random() * colors.length);
} // --- Создаем функция "random", которая возвращает округленное число, найденное "Math.random() * colors.length".

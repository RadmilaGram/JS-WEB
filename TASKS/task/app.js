/*TASK_1_1*/
/*const x = +prompt("Enter first number:");
const y = +prompt("Enter second number:");

if (!isNaN(x) && !isNaN(y)) {
  const sum = x + y;
  const sub = x - y;
  const mult = x * y;
  const div = x / y;
  let results = `0
  Addition: ${sum}
  Substraction: ${sub}
  Multiplication: ${mult}
  Division:  ${div !== 0 ? x / y : "Division by 0 is not possible"}
  `;

  alert(results);
} else {
  alert("Error: Please enter valid numbers.");
}*/

/*TASK_1_2 абсолютно все числа и буквы*/
let a = Math.floor(+prompt("Введите первое число (a):"));
let b = Math.floor(+prompt("Введите второе число (b):"));

if (a > b) {
  [a, b] = [b, a];
}

let sum = 0;
for (let i = a; i <= b; i++) {
  sum += i;
}

console.log(`Сумма чисел от ${a} до ${b} равна ${sum}`);

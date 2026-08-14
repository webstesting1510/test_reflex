function calculate(operation) {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const result = document.getElementById("result");

  let answer;

  if (operation === "+") {
    answer = Number(firstNumber) + Number(secondNumber);
  }

  if (operation === "-") {
    answer = Number(firstNumber) - Number(secondNumber);
  }

  if (operation === "*") {
    answer = Number(firstNumber) * Number(secondNumber);
  }

  if (operation === "/") {
    answer = Number(firstNumber) / Number(secondNumber);
  }

  result.textContent = `Result: ${answer}`;
}

function calculate(operation) {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const result = document.getElementById("result");

  if (firstNumber.trim() === "" || secondNumber.trim() === "") {
    result.textContent = "Error: Please enter both numbers.";
    return;
  }

  const first = Number(firstNumber);
  const second = Number(secondNumber);

  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    result.textContent = "Error: Please enter valid numbers.";
    return;
  }

  let answer;

  if (operation === "+") {
    answer = first + second;
  }

  if (operation === "-") {
    answer = first - second;
  }

  if (operation === "*") {
    answer = first * second;
  }

  if (operation === "/") {
    if (second === 0) {
      result.textContent = "Error: Cannot divide by zero.";
      return;
    }
    answer = first / second;
  }

  if (!Number.isFinite(answer)) {
    result.textContent = "Error: The calculation could not be completed.";
    return;
  }

  result.textContent = `Result: ${answer}`;
}

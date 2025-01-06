function calculator(num1, operator, num2) {
  // 코드를 작성해주세요.
  let result = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }
  console.log(result);
  return result;
}

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5

// 연산자 구분 if , switch

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

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function fixedScores(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  // 배열을 순회하며 3점씩 추가 하기
  // 기존 점수를 변수로 받아옴, 배열 순회 과정중 계산기 함수 사용.
  let fixedScores = [];

  for (let i = 0; i < scores.length; i++) {
    fixedScores.push(calculator(scores[i], "+", 3));
  }
  return fixedScores;
}

fixedScores(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]

function getEvenNumber(number) {
  // 코드를 작성해 주세요.
  let result = "";

  if (number % 2 === 0) {
    result = "짝수";
  } else {
    result = "홀수";
  }
  return result;
}

console.log(getEvenNumber(10)); // 결과값 "짝수";
console.log(getEvenNumber(7)); // 결과값 "홀수";

// 1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수 선언만 되고 값을 할당하지 않아서

// 2.
let apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
//변수선언이 되지 않아 에러가 났고, 갑을 재할당 할수있는 변수는 let

// 3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// lotto 배열의 인덱스 번호 3(->4번쨰값)을 표기.

// 4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// mySchedule에 빈 문자열이 할당되어 있으며 빈 문자열은 false값으로 반환.
// '||'연산자는 하나라도 true값이 있을경우 true반환하지만 모두 false일 경우 false를 반환
// '!' 는 not을 표기 하나, '!!' 두번 사용한 경우 not,not이기에 결국 원래 값을 반환

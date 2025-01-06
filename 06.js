function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

// const userBCart = copyUser(userACart);

// 깊은 복사하여 userBCart와 userACart가 다른 메모리주소를 바라 보도록 만들기
const userBCart = structuredClone(userACart); // 내장 객체가 있다고??? -_-^
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log("A", userACart);
console.log("B", userBCart);

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// -> const userBCart = userACart 로 인해서 userB의카트에 userA카트를 바로 할당해 주었기에 동일한 메모리를

// 2.	1번의 결과에 대한 이유를 설명해보세요.

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// -> 깊은 복사하여 userBCart와 userACart가 다른 메모리주소를 바라 보도록 만들기

// 3주차 문법에서 배운 깊은 복사 파트 문법
// var copyObjectDeep = function(target) {
// 	var result = {};
// 	if (typeof target === 'object' && target !== null) {
// 		for (var prop in target) {
// 			result[prop] = copyObjectDeep(target[prop]);
// 		}
// 	} else {
// 		result = target;
// 	}
// 	return result;
// }

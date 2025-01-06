function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}
//
let copyUser = function (target) {
  let result = {};
  if (typeof target === "object" && target !== null) {
    for (let prop in target) {
      result[prop] = copyUser(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = copyUser(userACart);

userBCart.items[1].price = 25000;

console.log("A", userACart);
console.log("B", userBCart);

// const userBCart = userACart;
// const coupon = { discount: 5000 };

// applyCoupon(userBCart, coupon);

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// -> 14줄 const userBCart = userACart 로 인해서 userB의카트 와 userA카트는 동일한 값을 같게 된다.

// 2.	1번의 결과에 대한 이유를 설명해보세요.

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// ->

// let copyUser = function (target) {
//   let result = {};
//   if (typeof target === "object" && target !== null) {
//     for (let prop in target) {
//       result[prop] = copyUser(targe[prop]);
//     }
//   } else {
//     result = target;
//   }
//   return result;
// };

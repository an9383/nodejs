//생성자 함수
//const animals = ['개','고양이','토끼']
const animals = new Array('개','고양이','토끼')

console.log(animals)
console.log(animals.length)

//스타벅스 메뉴 출력
const starbucks = new Array('아메리카노','라떼','마끼아또')
// Array.prototype.Menu() : 배열의 프로토타입에 Menu() 메소드를 생성한다.

Array.prototype.Menu = function () {
  console.log(this) // this : 배열을 가리킨다.
}
// starbucks의 배열에서 Menu() 메소드를 호출해 사용한다.
starbucks.Menu() // ['아메리카노', '라떼', '카푸치노']

// 생성된 Menu() 메소드는 다른 배열에서도 사용할 수 있다.
const mega = new Array('메가리카노', '메가떼', '메가치노') // 배열 생성
mega.Menu() // ['메가리카노', '메가떼', '메가치노']

// const americano = {
//   name: '아메리카노',
//   price: 3000,
//   order: function () {
//       // 일반 함수에서 this는 호출되는 객체를 가리킨다.
//       return `${this.name}는 ${this.price}원 입니다.` // this : winter 객체를 가리킨다.
//   },
// }

// const latte = {
//   name: '라떼',
//   price: 4500,
// }

// console.log(americano.order()) // 아메리카노는 4000원 입니다.
// console.log(americano.order.call(latte)) // 라떼는 4000원 입니다.

// //prototype
// function OrderCoffee (name,price) {
//   this.name = name
//   this.price = price
// }

// OrderCoffee.prototype.order = function () {
//   return `${this.name}은 ${this.price}원입니다.`
// }

// const latte = new OrderCoffee('라떼',5000)

// const americano = new OrderCoffee('아메리카노',4000)
// console.log(americano)
// console.log(americano.order())
// console.log(latte.order()) //라떼는 5000원입니다.

//class
class OrderCoffee {
  //생성자 함수 역할
  constructor(name, price) {
    this.name = name
    this.price = price
  }
    order(){
      return `${this.name}는 ${this.price}원 입니다.`
    }
    making() {
      return `${this.name}가 완성되었습니다.`
    }
    made(){
      return `${this.name}가 만들어졌습니다.`
    }
  }


const americano = new OrderCoffee('아메리카노',4000)
console.log(americano.order())
console.log(americano.making())
console.log(americano.made())

const latte = new OrderCoffee('라떼',5000)
console.log(latte.order())
console.log(latte.making())
console.log(latte.made())

//상속
class SpecialCoffee extends OrderCoffee {
  constructor(name,price,size) {
    super(name,price)
    this.size = size
  }
  special(){
    return `오늘의 스페셜 커피 ${this.name} 입니다.`
  }
  making() {
    return `${this.name}가 완성되었습니다.`
  }
  made(){
    return `${this.name}가 만들어졌습니다.`
  }
}
const ainS = new SpecialCoffee('아인슈페너', 6000, 'tall')
const latteS = new SpecialCoffee('연유라떼', 5000, 'small')

console.log(ainS.special()) // 스페셜 커피 아인슈페너 tall 사이즈는 6000입니다.
console.log(ainS.order()) // 스페셜 커피 연유라떼 small 사이즈는 5000입니다.

console.log(ainS.making()) // 아인슈페너를 만드는 중...
console.log(ainS.made()) // 아인슈페너가 만들어졌습니다.

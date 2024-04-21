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

const americano = {
  name: '아메리카노',
  price: 3000,
  order: function () {
      // 일반 함수에서 this는 호출되는 객체를 가리킨다.
      return `${this.name}는 ${this.price}원 입니다.` // this : winter 객체를 가리킨다.
  },
}

const latte = {
  name: '라떼',
  price: 4500,
}

console.log(americano.order()) // 아메리카노는 4000원 입니다.
console.log(americano.order.call(latte)) // 라떼는 4000원 입니다.




//함수 선언문
function hello1() {
  console.log('hello1')
}


//함수 표현식
const hello2 = function (){
  console.log('hello2')
  return 'hello2'
}

hello1()
hello2()

//함수 호출
function sum(a,b) {
return a+b
}

const a=sum(1,2)

console.log(sum(2,b=1))
// 2+ undefined =NaN

//객체 구조 분해 할당
const user = {
  name:'겨울',
  age:2,
  //email: 'an9384@naver.com'
}

//user 이름을 출력하는 함수
function getName({name,age}){

  //const {name, age} =user
  return user.name
}

function getAge(user){
  const {age} =user
  return age
}

function getEmail({email='이메일이 없습니다.'}){

  return email
}

console.log(getName(user))
console.log(getAge(user))
console.log(getEmail(user))

//Rest
function sum1(...rest){
  return rest
}
console.log(sum1(0,1,2,3,4,5,6,7,8,9))

// setInterval
// setInterval(콜백함수, 밀리초)
const interval = setInterval(() => {
  console.log('setInterval')
}, 3000)

const cancleBtn = document.querySelector('#btn')
cancleBtn.addEventListener('click', () => {
  console.log('취소버튼 클릭')
  clearInterval(interval)
})

// 콜백함수
function aa(callback) {
  callback()
  console.log('a')
}

function bb() {
  console.log('b')
}

aa(bb)

// 콜백함수 예제
const sum2 = (a, b, c) => {
  setTimeout(() => {
      return c(a + b)
  }, 1000)
}

sum2(1, 2, (value) => {
  console.log(value)
})

//일반함수 this
function user3() {
  this.firstName='가을'
  this.lastName='김'

return {
    firstName:'겨울',
    lastName: '김',
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`
    }
  }
}

const u = user3()
console.log(u.getFullName())

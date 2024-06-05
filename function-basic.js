//함수 선언
function doSomething() {
  console.log('hello');
}

//함수 호출
doSomething();


//2가지 함수

function add(a, b) {
  const sum = a + b;
  return sum;
}

const result = add(1, 4);
console.log(result);

const addFun = add;

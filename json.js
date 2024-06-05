//json
//JavaScript Object notation

//1. Object to json
//stringfy (obj)
let json = JSON.stringify(true);
console.log(json);


json = JSON.stringify([`apple`, `banana`]);
console.log(json);

const rabbit = {
  name: 'tori',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log('jump');
  }
};

// 함수 or js 에만 있는 함수는 포함 안됨
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});

//2.JSON to Object
//parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump(); // work
// obj.jump(); // error, 

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // nope;


//JSON Diff.com
//JSON beautifier
//JSON Parser
//JSON Validator



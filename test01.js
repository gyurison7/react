// 상수 : const(변함 없는 수) 재할당 불가
// 변수 : let 재할당 가능

const age= 21;

const testObj = {
    name: 'gyuri',
    age,
    company: 'Team Sparta',
    doSomethig: () => {}
}

const obj1 = {
    value1: 10,
}

const obj2 = obj1; // 얕은 복사(주소값을 복사했기 때문에 obj1도 함께 바뀜)
const obj3 = JSON.parse(JSON.stringify(obj1)); // 새로운 객체를 만들어냄, 함게 바뀌지 않음

obj1.value1 += 1;

console.log('obj1', obj1);
console.log('obj2', obj2);
console.log('obj3', obj3);
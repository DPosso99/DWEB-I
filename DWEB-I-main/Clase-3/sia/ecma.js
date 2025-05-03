//Ecma3 

//spread operator
const array1 = [1, 2, 3];
const otros = [...array1, 4, 5, 6];

otros[0]=35;
console.log(array1, otros);

//objetos
const feline = { legs: 4, eyes: 2 };

const canine = { isFurry: true, isCute: true };

const catDog = { ...feline, ...canine };

console.log(catDog);

//operador rest
function sum(nums) {
    return nums.reduce((total, number) => total + number, 0);
}

console.log(sum([1, 2, 3, 4, 5])); 

//destructuring
const scores = [10,20,30,40,50,100,20,12,5];

//Primeros puestos
//Oro, plata, bronce

scores.sort((a,b) => b-a);
console.log(scores);
const [oro, plata, bronce, ...left] = scores;
console.log("Oro "+ oro, "Plata "+ plata, "Bronce " + bronce, left);

const user={
    email: "bebesitomaiflox@gmail.com",
    password: "123456",
    username: "Bebesito Maiflox",
    born: 1940,
    died: 2000,
    age: 60,
}   

console.log("------------------------");

const {email, password, ...rest} = user;
console.log (email, password, rest);

//param destructuring
function llamado (user){
    console.log(user.username);
}
llamado(user);

console.log("------------------------");




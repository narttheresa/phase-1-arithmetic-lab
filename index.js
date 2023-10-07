const multiNum = (num1, num2) => {
        return num1 * num2;
}

let num1 = 2;
let num2 = 31;
const multiply = multiNum(2, 31);
    
console.log (multiply);






const random = Math.ceil(Math.random());

console.log (random);



const remainder = (num3, num4) => {
        return num3 % num4;

}

let num3 = 31;
let num4 = 9;

const mod = remainder(31, 9);
console.log(mod);




const numbers = [2, 1, 20, 10, 15];
const max = Math.max.apply(null, numbers);

console.log(max);

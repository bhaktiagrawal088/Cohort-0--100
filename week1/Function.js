// Write a function find the sum of two number

// function sum (a,b) {
//     return a+b;
// }

// console.log(sum(2,4))

let add = 0;
for(let i = 1 ; i < 10000000000000 ; i++){
    add += i;
}
console.log(add)

function sum(a, b, fnToCall){
    let result = a + b
    fnToCall(result)
}
function displayResult(data){
    console.log("Result of the sum is : " + data)
}
function displayResultPassive(data){
    console.log("Sum result is " + data)
}

const ans = sum(1,2 , displayResult)


// function ArithmeticCalculator(a,b,type){
//     if(type === 'sum'){
//         const val = sum(a,b)
//         return val;
//     }
//     if(type == 'minus'){
//         const val = sub(a-b)
//         return val

//     }
// }
// function sum(a,b){
//     return a+b;
// }
// function dub(a,b){
//     return a-b;
// }

// const  value = ArithmeticCalculator(1,2,',minus')

function ArithmeticCalculator(a, b, otherfunc){
    const ans = otherfunc(a,b)
    return ans;
}
function sum(a,b){
    return a+b;
}

const value = ArithmeticCalculator(1,4,sum)
console.log(value)

//**********setTimeout********/

function greet() {
    console.log("Hello , welcome to this coding world");
}
setTimeout(greet, 1000)


// ********Assignment **********
// 1. Create a counter in javascript(counts down from 30 to 10)
// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
// 3. create a terminal clock {HH:MM:SS}


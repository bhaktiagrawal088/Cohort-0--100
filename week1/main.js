console.log("HEllo there");
let a = 1;
a = 2;
console.log(a)

FristName = "Bhakti"
age = 20;
console.log("Name is " + FristName + " and age is " + age);

isMarried = "xyz"
if(isMarried == true){
    console.log(FristName + " is Married")
}
else{
    console.log(FristName + " is not Married")
}


let result = 0 ;
for(let i = 1 ; i <= 100 ; i++){
    result = result + i;
}
console.log(result);

// write a program to greet a person thier firtname and lastname
let FirstName = "Bhakti"
let LastName = "Sharma"
console.log("Hello " + FirstName + " " + LastName + " Welcome to the coding world")

// write a program to greet a person based on their gender
let Gender = "Female"
if(Gender == "Male"){
    console.log("Hello Sir Welcome to the coding world")
}
else if(Gender == "Female"){
    console.log("Hello Mam Welcome to the coding world")
}
else{
    console.log("Hello Welcome to the coding world")
}

// write a program that counts from 0 - 1000 and prints
let ans = 0;
for(let i = 0 ; i <= 1000 ;i++){
    ans = ans + i
}
console.log(ans)

// array and object
 
// WAP to print all the even number in an array
let arr = [1,2,3,4,5,6,7,8,9, 10]
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}

// WAP to print biggest element in an array
let num = [33, 65 , 87 , 90, 102]
let max = num[0]
for(let i = 0 ; i <= num.length; i++){
    if(max < num[i]) {
        max = num[i]
    }
}
console.log("Maximum number " + max)

// // WAP that reverses all the elements of an array
//  let array1 = [1,2,3,4,5];
//  let array2 = [];
//  for(let i = array1.length-1 ; i >= 0 ; i--){
//     array2.push(array1[i])
//  }
//  console.log(array2)

 let number = [1,2, 3, 4, 5,6 ]
 for(let i = 0 ; i < number.length/2 ; i++){
    let temp = number[i]
    number[i] = number[number.length - 1- i]
    number[number.length - 1 - i] = temp
 }
 console.log(number)




// object 
const user = {
    name : "Bhakti",
    age : 21,
    gender : "Female",
}
console.log(user.name)
console.log(user['name'])

// WAP that prints all the male people's firstname give a complex object

const users = [{
    name : "Bhakti",
    gender : "Female"
},
{
    name : "Rahul",
    gender : "Male"
},
{
    name : "Sakshi",
    gender : "Female"
},
{
    name : "Raj",
    gender : "Male"
}
]
for(let i = 0 ; i < users.length ; i++){
    if(users[i].gender == "Male"){
        console.log(users[i].name)
    }
}



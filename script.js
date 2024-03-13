// let firstaName = "aliabbas"
// console.log(firstaName[6])

// let firstaName = "aliabbasMaryamijoker"
// console.log(firstaName.length)
// console.log(firstaName[firstaName.length-8])


// trim folow this methods to remove the spaces in the strings
// let firstaName = "    aliabbas    "
// console.log(firstaName.length)
// firstaName = firstaName.trim()
// console.log(firstaName)
// console.log(firstaName.length)



// let lastName = "     shahsab    ";
// console.log(lastName.length)
// lastName = lastName.trim();
// console.log(lastName)
// console.log(lastName.length)

// let firstaName = "aliabbas"
// let newString = firstaName.slice(2,6)
// console.log(newString);

// typeof operator///////////////////////////

// let age = 24;
// let firstaName = "aliabbas";
// console.log(typeof age)

// number to string/////////////////////
// let age = 23;
// age = age + "";
// console.log(typeof age)

// let years = 22;
// years = years + " ";
// console.log(typeof years)

// string to number//////////////

// let newstr =  +"23";
// console.log(typeof newstr)


// string concatinate

// let str1 = "12"
// let str2 = "12"

// let fullName = +str1  + +str2;
// console.log(fullName)

// templete str///////////////
// let  age = 24;
// let firstaName = "ali"
// // let aboutMe = "my nanme is" + " " + firstaName + " " + "and im" + age + "years"
// let aboutMe = `my ${firstaName} is ali and im ${age} years old`
// console.log(aboutMe);

// Boolean//////////////

// let num1 = 10;
// let num2 = 10;
// console.log(num1>=num2);

// if condation


// let num3 = 18;

// if(num3%2===0){
    //     console.log("even")
    // }
    // else{
        //     console.log("odd")
        // }
        
        // let age = 21;
        
        // if(age>=24){
        //     console.log("you are Elligible to attemp exams")
        // }
        // else{
        //     console.log("you are not Elligible to attemp exams")
        // }
        // Ternory operator////////////////////////

        // let age2 = 24;
        // let married = age2>=24 ? "you are now young" : "you are to small";
        // console.log(married)
 
        // let num = 20;
        // let num2 = num>18 ? "show num 1" : "show num 2"
        // console.log(num2)



        // And operator//////////////////////////

        // let firstaName = "Ali";
        // let age = 24;
        // if(firstaName [0] === "A" && age>=23){
        //     console.log("And operator successfully work");
        // }
        // else{
        //     console.log("Error Retry")
        // }
        // Nested if else/////////////////

        // let guestNumber = 20;
        // let userguess = +prompt("guss the number")
        
        // if(userguess === guestNumber){
        //     console.log("your guss is right");
        //     // console.log(typeof userguess)
        // }
        // else{
        //     if(userguess > guestNumber){
        //         console.log("very hight gues")
        //     }
        //     else{
        //         console.log("very low gues")
        //     }
        // }

        // The plus operator convert string into Number

        // let guest_number = 30;
        // let people_guest = +prompt('give your input')

        // if(people_guest === guest_number){
        //     console.log("your gues is right!")
        // }
        // else{
        //     if(people_guest > guest_number){
        //         console.log("your gues is high")
        //     }
        //     else{
        //         console.log("your gues is low!")
        //     }
        // }

        // let temperature = 30;
        // if(temperature < 0){
        //     console.log("exteremly cold");
        // }
        // else if(temperature < 15){
        //     console.log("cold today")
        // }
        // else if(temperature < 20){
        //     console.log("turn on Ac")
        // }
        // else if(temperature < 31){
        //     console.log("lets go to swim")
        // }
        // else{
        //     console.log("to hot")
        // }

        // Swithch Statement///////

        //  let Day = 3
        //  switch(Day){
        //     case 0 :
        //     console.log("Sunday");
        //     break;
        //     case 1 :
        //     console.log("monday");
        //     break;
        //     case 2 :
        //     console.log("tuesday");
        //     break;
        //     case 3 :
        //     console.log("Wednesday");
        //     break;
        //     case 4 :
        //     console.log("thursday");
        //     break;
        //     case 5 :
        //     console.log("friday");
        //     break;
        //     case 6 :
        //     console.log("friday");
        //     break;
        //     case 7 :
        //     console.log("friday");
        //     break;
        //     default :
        //     console.log("invalid day")
        //  }

        // loops in javascript///////////////

    // While loop/////
    // let num = 10;
    // let total = 0
    // let i = 0;
    // while (i<=10) {
    //     total = total + i 
    //     i++
    // }
    // console.log(total);

    // let num = 20;
    // let totol = 0
    // let i= 0;
    // while(i<=20){
    //     totol=totol +i
    //     i++
    // }
    // console.log(totol);

    // for loop//-----------

    // for(let i= 0; i<=20; i++){
    //     console.log(i)
    // }

    // for (let i=1; i<=10; i++){
    //     console.log(i)
    // }
    // Array in javascript
    // let fruits = ["apple", 'banana', 'mangoes'];
    // fruits[1]= "pineapple"
    // console.log(fruits);

    // let subj = ["math",'computer',"english","urdu"]
    // subj[2] = "ict";
    // console.log(subj)
    // console.log(typeof subj)
    // console.log(Array.isArray(subj))

    // let arr = ["hira", "seema", "semi","nayab"]
    // let obj ={};  //object literal
    // console.log(arr);
    // console.log(typeof obj)
    // console.log(Array.isArray(obj))

    // push mehods/////////

    // let fruits = ["apple", 'banana', 'mangoes'];
    // fruits.push("graps","apple","orange")
    // console.log(fruits);

    // pop methods////////

    //  let fruits = ["apple", 'banana', 'mangoes',"pineaple","orange","walnuts"];
    //  fruits.pop(fruits)
    //  console.log(fruits);
     
    // unshift methods///////////
    // let subj = ["math","English","urdu","ict"]
    // subj.unshift("database","networking","operatingSystem")
    // console.log(subj);

    // shiftMethods//////////
        //  let subj = ["math","English","urdu","ict"];
        //  subj.shift()
        //  console.log(subj)
        // how to clone arrays in javascript.............
    //     let array1 = ["item1", "item2"]
    //   let oneMoreArray = ["item3", "item4"]
    //     let array2 = [...array1, ...oneMoreArray]
    //     // let array2 = array1.slice(0)
    //     console.log(array1 === array2)
    //      array1.push("item3")
    //     console.log(array1);
    //     console.log(array2)

    // // now we can copy the array using seprate operator nad this is the latest way to copy array....

    // let fruits = ["apple","banana","orange","mangoes","pineApple"]
    // // for(let i =0; i =fruits.length; i++){
    // //     console.log(i)
    // // }
    // // console.log(fruits)
    // // console.log(fruits.length)

    // let fruits2 = [];
    // for(let i=0; i< fruits.length; i++){
    //     fruits2.push(fruits[i].toUpperCase())
    // }
    // console.log(fruits2)

    // object inside arrays

    // const users =[
    //     {
    //         userI:1,
    //         name: "ali",
    //         age: 22,

    //     },
    //     {
    //         userI:1,
    //         name: "ali",
    //         age: 22,

    //     },
    //     {
    //         userI:1,
    //         name: "ali",
    //         age: 22,

    //     },
    //     {
    //         userI:1,
    //         name: "ali",
    //         age: 22,

    //     },

    // ]
    // for(let user of users){
    //     console.log(user)
    // }

    // console.log(user)


// function sumSalaries(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
  
//     return sum; // 650
//   }
  
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert( sumSalaries(salaries) ); 

// function sumSalaries(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
  
//     return sum;
//   }
  
//   let salaries = {
//     "Aly": 30000,
//     "faxan": 30000,
//     "sheryar": 30000,
//     "sayan": 45000
//   };
  
//   prompt( sumSalaries(salaries)); 

// let sum = (a, b) => a + b;

// /* This arrow function is a shorter form of:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3

// let sub = (a, b) => a - b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

// alert( sum(4, 2) ); // 3


// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Still Single!");

// welcome();
// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number\


// function in javascsript////////////////

// function decelration in javascript
// function happybirthdaysayan(){
//   console.log("happy birth to you");

// }
// happybirthdaysayan()


// function addnumb(a, b) {
//   return a + b;
// }
// console.log(addnumb(2, 9));

// // function expressionin javascript//////

// const happybirthdayfazan = function (){
//   console.log("happy birth to you");
// }
// happybirthdayfazan()

// const sumthreenum = function(num1,num2,num3){
//   return num1+num2+num3
// }
// const answer = sumthreenum(30,20,50)
// console.log(sumthreenum); 

// // Arrow function in javascript////////////
// const happybirthdayAli = () =>{
//   console.log("happy birth to you Ali");
// }
// happybirthdayAli()

// const findTarget = (array, target)=>{
//   for(let i = 0; i < array.length; i++){
//     if(array[i] === target){
//       return i
//     }
//   }
//   return -6
// }

// // default parameters in javascript////////

// const addtwonumb = (a,b=2) =>{
// return a+b
// }
// const ans = addtwonumb(9,10)
// console.log(ans);

// importnat arrys mehhods in javscript ///////////////
//  forEach,
//  map methods,
//  filters,
//  Reducers

// For Each in reactjs

// const numbers = [1,2,3,4,5,7]
// function myfunc(number, index){
//   console.log(`index is ${index} number is ${number}`)
//   // console.log(`${number}*2 ={number * 2}`);
// }
// for(let i =0; i <= numbers.length i++){
//   myfun(numbers[i],i)
// }
// numbers.forEach(myfunc)

// const number = [2,3,4,5]

// number.forEach(function(number, index){
//   console.log(number*5 ,index);
// })

// const num = [1,2,3,4]
// function myfuncc(number ,index){
//   console.log(`number is ${number}, index is ${index}`);
// }
// for(let i =0; i<= num.length; i++){
//   myfuncc(num[i] , i)
// }

// map mrhtodsn in javascripts//////////////////////
// const numbers = [2,3,4,4]

// const square = function(number){
//   return number* number
// }
// const squarenumber = numbers.map(square)
// console.log(squarenumber);

// const people = [
//   {
//     name: "ali", age: 23,
//   },
//   {
//     name: "shah", age: 20
//   },
//   {
//     name: "mawad",age:23
//   }
// ]
// // const names = people.map(person => person.name)
// // const age = people.map(person =>person.age)
// // console.log(names,age);
// const peoplewithId = people.map((person,index)=>({...person, id: index + 1}))
// console.log(peoplewithId);


// filter methods in javascript///////
// const numbers = [1,2,4,6,7,8,12,14]
// const evenNumber = number.filter = (number) =>{
//   return number % 2 === 0;
// }
// console.log(evenNumber)

// const numbers = [1, 2, 4, 6,20,40, 7, 8, 12, 14];

// const evenNumbers = numbers.filter(number => {
//   return number % 2 === 0;
// });

// console.log(evenNumbers);

// const numbers = [1,2,3,4,5,6,3,7,8,20]  

// const sum = numbers.reduce((accumulator,currentValue)=>{
//   return accumulator + currentValue
// })
// console.log(sum);

const number = [1,2,3,4,5]
number.sort()
console.log(number);







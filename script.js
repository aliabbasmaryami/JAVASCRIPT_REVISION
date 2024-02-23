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

    for(let i= 0; i<=20; i++){
        console.log(i)
    }
    

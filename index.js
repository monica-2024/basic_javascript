// 10/22/24
// const students = [
//   {
//     name: "Phil",
//     course: "Web",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "DJ",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "DC",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "Inchan",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: false,
//   },
//   {
//     name: "Esther",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: false,
//   },
//   {
//     name: "Josh",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: false,
//   },
// ];

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].days.length; j++) {
//     if (students[i].days[j] === "Friday") {
//       console.log(students[i].name);
//     }
//     if (students[i].days[j] === "Saturday") {
//       console.log(students[i].name);
//     }
//   }
// }
// Using a for loop, print out each student's name if they are in the QA course AND has no prior experience. (Inchan, Esther,Josh)
// for (let i = 0; i < students.length; i++) {
//   if (students[i].course === "QA" && students[i].hasPriorExperience === false) {
//     console.log(students[i].name);
//   }
// }
// Harder exercise - Using a for loop, only print the student's name if the student has class on  Friday.
// Hint:  you can use for loops inside of for loops. (Phil, Inchan, Esther)
// for (let i = 0; i < students.length; i++) {
//   for (let d = 0; d < students.length; d++) {
//     if (students[i].days[d] === "Friday") {
//       console.log(students[i].name);
//     }
//   }
// }
// 2. using a for loop, print the numbers 6,5,4,3,2,1 (reverse order 뒤에서)
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);
// }

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// const firstName = "Monica";
// console.log("what is in firstName", firstName);
// // console.log(firstName);

// const teacherName = "Philip";
// console.log("what is in teacherName", teacherName);
// console.log(teacherName);

// const classSize = 7;
// console.log(classSize);

// const classMates = ["Esther", "Josh", "Inchan", "Monica", "DJ"];
// console.log(classMates[0]);
// console.log(classMates[2]);
// console.log(classMates[1], classMates[3], classMates[4]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers[0] + numbers[5]);
// console.log(numbers[6] - numbers[1]);
// console.log(numbers[6] % numbers[8]);
// console.log(numbers[4] / numbers[1]);

// const Monica = {
//   name: "Monica",
//   hobbies: ["movies", "walking"],
//   livingArea: "annandale",
// };
// console.log(Monica.name);
// console.log(Monica.hobbies);
// console.log(Monica.hobbies[0]);
// console.log("My name is", Monica.name);
// console.log("and my hubby is", Monica.hobbies[0]);
// console.log("I live in", Monica.livingArea);
// console.log(
//   "My name is",
//   Monica.name,
//   "and I live in",
//   Monica.livingArea,
//   "I also enjoy",
//   Monica.hobbies[1]
// );

// let abc;
// const zxy = null;
// console.log(abc, zxy);

// create two variables firstName, and lastName
// console.log "my full name is xxx yyy"

// const firstName = "Moinca";
// const lastName = "Lee";
// console.log(firstName, lastName);
// console.log("My full name is", firstName, lastName);

// const joshua = "genius";
// console.log(joshua);

// const howManyDoors = 3;
// console.log(howManyDoors);
// const howManyGlassDoors = 2;
// console.log(howManyGlassDoors);

// const totalDoors = howManyDoors + howManyGlassDoors;
// console.log(totalDoors);

// const classMates = ["Danise", "Marco", "Philip"];
// const funnyGuy = classMates[0];
// console.log(funnyGuy);

// const inchan = {
//   name: "inchan",
//   age: 38,
//   wearHat: true,
// };
// console.log(inchan);
// console.log(inchan.age, inchan.wearHat);

// const firstName = "Monica"
// const number = 8
// const bool = false
// const seasons = ['spring', 'summer', 'fall', 'winter']

// const baumBlgd = {
//   level: 3,
//   tenants: ["baum", "dental"],
// };
// console.log(baumBlgd);
// console.log(baumBlgd.tenants[1]);

// const sumNumbers = 3 + 9;
// console.log(sumNumbers);
// console.log(sumNumbers === 12);
// console.log(sumNumbers !== 12);

// const subtractNumbers = 98 - 245;
// console.log("It will be", subtractNumbers);

// const divideNumbers = 8984 / 454
// console.log(divideNumbers)

// const divisibleNumber = 1234 % 2; (divisible % even or odd)
// console.log(divisibleNumber);

// const multiplyNumbers = 23 * 12;
// console.log(multiplyNumbers);

// let marco = "handsome";
// console.log(marco);
// marco = "not handsome";
// console.log(marco);

// const monica = "georgous";
// console.log(monica);
// monica = "ugly";
// console.log(monica);

// const monica = "georgous";
// console.log(monica);
// let monica2 = "ugly";
// console.log(monica2);

// const sumNumbers = 3 + 9;
// console.log(sumNumbers);
// console.log(sumNumbers === 12);
// console.log(sumNumbers !== 91);

// const monica = "georgous";
// console.log(monica !== "georgous");

// console.log(3 == "3");
// console.log("3" + 3);
// console.log(33);

// const oddNumber = 1331 % 2 === 1;
// console.log(oddNumber);

// const numb1 = 1231;
// const numb2 = 4;
// const numb3 = 854;
// const numb4 = 323;
// const numb5 = 5342;
// const numb6 = 432;
// const numb7 = 9753;
// const numb8 = 12351;

// console.log(numb1 % 2 === 1);
// console.log(numb2 % 2 === 0);
// console.log(numb3 % 2 === 0);
// console.log(numb4 % 2 === 1);
// console.log(numb5 % 2 === 0);
// console.log(numb6 % 2 === 0);
// console.log(numb7 % 2 === 1);
// console.log(numb8 % 2 === 1);

// 연습하기 10/26/24
// if (numb3 % 2 === 1) {
//   console.log("this is odd number");
// } else {
//   console.log("this is not odd number");
// }

// const monica = "georgous";
// if (monica === "georgous") {
//   console.log("monica is goergous");
// } else {
//   console.log("monica is not georgous");
// }

// const monica = "loves QA";
// if (monica !== "loves QA") {
//   console.log("Monica can do it");
// } else {
//   console.log("Monica needs to move on");
// }

// if (3 + 5 === 8) {
//   console.log("3 + 5 is equal to 8");
// } else {
//   console.log("3 + 5 is not equal to 8");
// }

// let number = 7;
// while (number < 18) {
//   console.log(number);
//   number = number + 1;
//   //   number++;
// }

// let num = 18;
// while (num >= 15) {
//   console.log(num);
//   num = num - 1;
// }

// 11/2/2024
// function hello() {
//   console.log("hello, everyone!");
// }
// return hello();

// function hello() {
//   console.log("Greeting!");
// }
// hello();

// const lunchBox1 = 'apple'
// let lunchBox2 = 'apple'

// lunchBox2 = 'banana'
// lunchBox1 = 'grape'

// console.log(lunchBox1)
// console.log(lunchBox2)

//create variable for age
//if age is less than 100, console log 'im young'

// let age = 110;               let age = 110;
// if (age < 100) {               if(age < 100) {
//     console.log('im young')       console.log('im young')
// } else if(age < 120) {        } else if(age < 120) {
//     console.log("im still young")   console.log('im still young')
// } else {                             } else {
//     console.log('im old')            console.log('im old')
// }                                    }

// create a variable for score
// if score is greater than 90, console log 'A'
// if score is greater than 80, console log 'B'
// if score is greater than 70, console log 'C'
// if score is greater than 60, console log 'D'
// otherwise console log 'you are failed!!'

// let score = 55;                    let score = 55;
// if (score > 90) {                   if(score > 90) {
//     console.log('A')                    console.log('A')
// } else if(score > 80) {               } else if(score > 80) {
//     console.log('B')                    console.log('B')
// } else if(score > 70) {               } else if(score > 70) {
//     console.log('C')                     console.log('C')
// } else if(score > 60) {               } else if(score > 60) {
//     console.log('D')                       console.log('D')
// } else {                              } else {
//     console.log('you are failed')         console.log('you are failed')
// }                                     }

// create a variable for num
// if num is Odd, console log 'Odd Number'
// if num is Even, console log 'Even Number'
// otherwise 'number is 0'

// let num = 0; (sample)                 let num = 0;
// if(num % 2 === 1) {                   if(num % 2 === 1) {
//     console.log('Odd Number')               console.log('Odd Number')
// } else if(num === 0) {                   } else if(num === 0) {
//     console.log('number is 0')              console.log('number is 0')
// } else (num % 2 === 0) {                 } else (num stop here if you compare 3)
//     console.log('Even Number')

// }

// let num = 4; (correct one)
// if(num % 2 === 1) {
//     console.log('Odd Number')
// } else if(num === 0) {
//     console.log('number is 0')
// } else {
//     console.log('Even Number')
// }

// const age = 19;
// const hasDriversLicense = true;

// // if they are at least 16 years old AND have a drivers license
// // print "I can drive!"
// // else print "I can't drive!"

// if(age > 16 && hasDriversLicense === true) {              if(age > 16 && hasDriversLicense === true) {
//     console.log('I can drive!')                              console.log('I can drive!')
// } else {                                                   } else {
//     console.log("I can't drive!")                             console.log("I can't drive!")
// }                                                          }

// const age = 16; (False || \\ next to)
// const hasDriversLicense = false;

// // if they are at least 16 years old AND have a drivers license
// // print "I can drive!"
// // else print "I can't drive!"

// if(age > 16 || hasDriversLicense === true) {  if(age > || hasDriversLicense === true) {
//     console.log('I can drive!')                     console.log('I can drive!')
// } else {                                      } else {
//     console.log("I can't drive!")                   console.log("I can't drive!")
// }                                             }

// const baumAcademy = {
//     tuesday: {
//         day: "tuesday",
//         hours: "6pm to 9pm",
//         students: [
//             {
//             name: "Monica",
//             sex: "female"
//         },
//         {
//             name: "Matthew",
//             sex: "male"
//         }
//     ]
//     },
//     thursday: {
//         day: "thursday",
//         hours: "6pm to 9pm"
//     },
//     saturday: {
//         day: "saturday",
//         hours: "10am to 3pm"
//     }
//   }

//   console.log(baumAcademy.tuesday.students[1].name)
//   console.log(baumAcademy.tuesday.students[0].sex)

//   if(baumAcademy.tuesday.day === "tuesday"){
//     console.log(baumAcademy.tuesday.hours)
//   }

//   if(baumAcademy.thursday.day === "thursday"){
//     console.log(baumAcademy.thursday.hours)
//   }

//   if(baumAcademy.saturday.day === "saturday"){
//     console.log(baumAcademy.saturday.hours)
//   }

//   console.log(baumAcademy.tuesday.day)
//   console.log(baumAcademy.tuesday.hours)

// if day value is tuesday, console.log hours
// if day value is thursday, console.log hours
// if day value is saturday, console.log hours

//   const travel = {
//     "bookings": [
//       {
//         "booking_id": "BKG001",
//         "customer_name": "Emma White",
//         "destination": "Paris",
//         "departure_date": "2024-05-10",
//         "return_date": "2024-05-20",
//         "flights": [
//           {"flight_number": "AF123", "departure": "JFK", "arrival": "CDG"},
//           {"flight_number": "AF124", "departure": "CDG", "arrival": "JFK"}
//         ],
//         "hotel": {
//           "name": "Le Meurice",
//           "check_in": "2024-05-10",
//           "check_out": "2024-05-20"
//         },
//         "total_cost": 2500
//       },
//       {
//         "booking_id": "BKG002",
//         "customer_name": "Liam Brown",
//         "destination": "Tokyo",
//         "departure_date": "2024-06-15",
//         "return_date": "2024-06-25",
//         "flights": [
//           {"flight_number": "JL456", "departure": "LAX", "arrival": "HND"},
//           {"flight_number": "JL457", "departure": "HND", "arrival": "LAX"}
//         ],
//         "hotel": {
//           "name": "Park Hyatt Tokyo",
//           "check_in": "2024-06-15",
//           "check_out": "2024-06-25"
//         },
//         "total_cost": 3200
//       }
//     ]
//   }
//   console.log(travel.bookings[0].total_cost + travel.bookings[1].total_cost)
//   console.log(travel.bookings[0].hotel.name, travel.bookings[0].customer_name)

//   console.log("destination is " + travel.bookings[1].destination + " " + "departure date is " + travel.bookings[1].departure_date)
// console.log(travel.bookings[1].flights[0].flight_number)
// console.log("The reason I'm staying at" + travel.bookings[1].hotel.name + "is I need to checkout before" + travel.bookings[1].departure_date + "because my birthday is coming")

// console.log("The reason I'm staying at " + travel.bookings[1].hotel.name + "is I need to checkout before " + travel.bookings[1].departure_date + "because my birthday is coming")
// console.log("The reason I'm staying at ", travel.bookings[1].hotel.name, "is I need to checkout before " , travel.bookings[1].departure_date , "because my birthday is coming")
// console.log("The reason I'm staying at", travel.bookings[1].hotel.name,"is I need to checkout before", travel.bookings[1].departure_date, "because my birthday is coming")

// 11/5/2024 Practice
// for(let i = 0; i <= 100; i++){               for(let i = 0; i <= 100, i++){
//     // console.log(i)                             console.log(i)
//     // if(i > 50){                                if(i > 50){
//     //     console.log(i,"is less than 50")           console.log(i, "is less than 50")
//     // }else{                                     }else{
//     //     console.log(i, "is greater than 50")       console.log(i, "is greater than 50")
//     // }                                          }
//     if(i === 0){                                  if (i === 0){
//         console.log(i, "is 0")                      console.log(i, "is 0")
//     }                                             }
//     if(i % 2 === 1){                              if(i % 2 === 1){
//         console.log(i, "is odd")                    console.log(i, "is odd")
//     }else{                                        }else{
//         console.log(i, "is even")                   console.log(i, "is even")
//     }                                             }
// }                                              }

// const students = ['Josh', "Monica", 'Phil', 'InChan', 'DJ', 'Marco', 'Esther']
// const students = [
//     {name: 'Josh', age: 20}, {name: "Monica", age: 30}, {name: 'Phil', age: 40}, {name: 'InChan', age: 50}, {name: 'DJ', age: 60}, {name: 'Marco', age: 70}, {name: 'Esther', age:70}
// ]
// // console.log(students[0])
// for(let i = 0; i < students.length; i++){
//     // console.log(students[i])
//     if(students[i].name === 'Josh'){
//         console.log("he is young guy", students[i].age)
//     }else{
//         console.log("it is not Josh", students[i].name)
//     }
// }

// // const students = ['Josh', 'Monica', 'Phil', 'Inchan', 'DJ', 'Marco', 'Esther']
// const students = [
//     {name: 'Josh', age: 20}, {name: 'Monica', age: 30}, {name: 'Phil', age: 40}, {name: 'Inchan',
// age: 50}, {name: "DJ", age: 60}, {name: 'Marco', age: 70}, {name: 'Esther', age: 70}
// ]
//     console.log(students[0])
//   for(let i = 0; i < students.length; i++){
//     console.log(students[i])
//         if(students[i].name === 'Josh'){
//             console.log('he is young guy', students[i].age)
//         }else{
//             console.log('it is not Josh', students[i].name)
//         }
//     }

// 11/7/2024 Practice
// const twitter = {
//     tweets: [
//       {
//         userId: 1,
//         content: "Twitter is awesome!",
//       },
//       {
//         userId: 1,
//         content: "Man, twitter sucks!",
//       },
//       {
//         userId: 2,
//         content: "What is twitter?",
//       },
//     ],
//     users: [
//       {
//         id: 1,
//         name: "Phil",
//       },
//       {
//         id: 2,
//         name: "Marco",
//       },
//     ],
//   };

// //   print out all tweets by user 1
// //   you can choose to create a function that takes in tweets Array
// //   or you can create a function for loop

// for(let i = 0; i < twitter.tweets.length; i++){
//     if(twitter.tweets[i].userId === 1){
//         console.log(twitter.tweets[i].content)
//     }
// }

// 11/7/2024 type function (keyword) then give it a name (getNumberOne)- function name foollowed by ()

// example 1
// function getNumberOne() {
//     return 1;
// }
//  const one = getNumberOne();

//  console.log(one);

// example 2
//  function getName() {
//     return "Phil"
//  }
//     const name = getName();
//     console.log(name)

// function getUserTweets(userId) {
//     const twitter = {
//         tweets: [
//             {
//                 userId: 1,
//                 content: "Twitter is awesome!",
//             },
//             {
//                 userId: 1,
//                 content: "Man, twitter sucks!",
//             },
//             {
//                 userId: 2,
//                 content: "What is twitter?",
//             },
//         ],
//         users: [
//         {
//             id: 1,
//             name: "Phil",
//         },
//         {
//             id: 2,
//             name: "Marco",
//         },
//         ],
//   };

//   console.log("function is being called?S")
//   // your code here
//   for (let i = 0; i < twitter.tweets.length;i++){
//     if(twitter.tweets[i].userId === userId)
//         console.log(twitter.tweets[i].content)

//     }
//   }

//   function getUserTweets(userId) {
//     const twitter = {
//         tweets: [
//             {
//                 userId: 1,
//                 content: "Twitter is awesome!",
//             },
//             {
//                 userId: 1,
//                 content: "Man, twitter sucks!",
//             },
//             {
//                 userId: 2,
//                 content: "What is twitter?",
//             },
//         ],
//         users: [
//         {
//             id: 1,
//             name: "Phil",
//         },
//         {
//             id: 2,
//             name: "Marco",   
//         },
//         ],
//   };

//   let tweets = [];
//   // your code here
//   for (let i = 0; i < twitter.tweets.length;i++){
//     if(twitter.tweets[i].userId === userId){
//         tweets.push(twitter.tweets[i].content)
//     }
//     }
//     return tweets
//   }

//   const tweets = getUserTweets(2)
//   console.log(tweets)
// 1. this function should return an array of tweets
// 2.  this function should return an array of tweets by the userId passed into the function

// console.log(twitter.tweets[0].content)

// 11/12/2024 Promise in JavaScript, Async, Await
// function getName(){}

// const getName = (something) => {}
// 둘다 같은 개념이다

// Playwright Blue는 QA 가 해야 한다
// import { test, expect, type Page } from "@playwright/test";

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://baumacademy.com");
// });

// test.describe("Baum Academy", () => {
//   test("should see welcome message", async ({ page }) => {
//     const welcomeMsg = page.getByText("Welcome to Baum Academy");
//     await expect(welcomeMsg).toBeVisible();
//   });
// });

// test.describe("Baum Academy Courses", () => {
//     // i would write the test
//     test("click on course button", {page} => {
//         const courseBtn = page.getByText("COURSES")
//         ㅁㅈ먓 ㄷ텓ㅊㅅ(채ㅕㄱㄴ듀수) 미완성
//     })
// })

// 11/16/2024

// 1. create a function that takes two arguments
// if they are the same, return true
// otherside return false
// isSame(3,5()) // false

// function isSame(num1, num2) {
//   if (num1 === num2) {
//             return true;
//          }  else {
//             return false;
//          }
//   // return isSame (****적을 필요없다***)
// }
// const trueOfalse = isSame(3, 5)
// console.log(trueOfalse)

// 2. create a function that takes an array of numbers (처음것을 비교한다 high 와 low를 지정해줘야 한다)
// return an object that looks like
// {
//  highest: 56,
//  lowest: 1
// }
// highlow([1, 4, 4, 53, 56, 3, 11])

// function highlow(num) {
//   let high = num[0];
//   let low = num[0];
//   for (i = 0; i < num.length; i++) {

//     if (num[i] > high) {
//       high = num[i]
//     }

//     if (num[i] < low) {
//       low = num[i]
//     }
//   }
//   return {
//     highest: high,
//     lowest: low
//   }
// }
// const hlnum = highlow([6, 8, 9, 3, 98])
// console.log(hlnum)

// 3. create a function that takes a string as argument
// and returns the string in reverse order
// reverseString('hello') // 'olleh'

// function reverse(string){
//   let word = '';
//   for (let i = string.length-1; i >= 0; i--) {
//     word = word + string[i]

//   }
// return word
// }

// const order = reverse('hello')
// console.log(order)

// [3, 2, 1]
// function reverseNum(number){
//   let num = [];
//   for (let i = number.length-1; i >= 0; i--) {
//     num.push(number[i])
//   }
// return num
// }

// const num2 = reverseNum([3, 2, 1])
// console.log(num2)

//  [3,2,1]더해서 6나오기 끝내기

// function reverseNum(number){
//   let num = 0;
//   for (let i = number.length-1; i >= 0; i--) {
//     num.push(number[i])
//   }
// return num
// }

// const num2 = reverseNum([3, 2, 1])
// console.log(num2)

// 11/16/2024

// The problem is simple:
// Print the numbers from 1 to 100.
// If divisible by 3, print "Fizz" instead of the number.
// If divisible by 5, print "Buzz" instead of the number.
// If divisible by both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for(let i = 1; i <= 100; i++){
    if( i % 3 === 0 && i % 5 === 0){
      console.log(i, 'FizzBuzz')
    }else if( i % 3 === 0){
      console.log(i, 'Fizz')
    }else if( i % 5 === 0 ){
      console.log(i, 'Buzz')
    }else{
      console.log(i)
    }
  }
}
fizzBuzz(5);
//순서 바꿔도 상관없는데 위에것이 맞다
//  function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//       console.log(i, "Fizz")
//     } else if (i % 5 === 0) {
//       console.log(i, "Buzz")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i, "FizzBuzz")
//     } else {
//       console.log(i)
//     }
//   }
// }
// fizzBuzz()

// 11/26/2024
// const newArray = students.map((ele)) +> {
//     return ele.name

// })
// console.log('newArray', newArray)

// const.newArr = students.filter((ele)) => {
//     return ele.age > 20
// })
// console.log('newArr', newArr);

// const arr1 = ["T", "J", "M"];
// const arr2 = ["DJ", "DC"];
// // const newArr2 = [...arr1, ...arr2] 다른 방법
// // console.log(arr1);
// const newArr = arr1.concat(arr2);
// console.log(newArr);

// const foundStudent = students.find(() => {
//     return Element.name === "Sam Ives"
// })
// console.log('foundStudent', foundStudent);

// function removeDuplicates(arr)

// arr.forEach((ele) => {
//     if(newArr.includes(ele)) === false{
//         newArr.push(ele)
// //
//     }
// })

// const findDivisible = (num, div) => {
//   let numbers = [];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % div === 0) {
//     numbers.push(num[i]);
//   }
// }

//   num.forEach((ele) => {
//     if (ele % div === 0) {
//       numbers.push(ele);
//     }
//   });

//   const numbers = num.filter((ele) => {
//     if (ele % div === 0) {
//       return true;
//     }
//   });

//   return numbers;
// };
// console.log(findDivisible([10, 15, 20, 25, 30], 3));

// write a fuction called replaceOddEven that takes an array of numbers and replace odd number to "Odd" and even number to "Even" and return a array of "Odd" and "Even"

// replaceOddEven([10, 15, 20, 25, 30]) => output [ 'Even', 'Odd', 'Even', 'Odd', 'Even' ]

// function replaceOddEven(numbers) {
//   let newArr = [];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push("Even");
//     } else {
//       newArr.push("Odd");
//     }
//     return newArr;
//   }
// }
// console.log(replaceOddEven([1, 2, 3, 5, 7]));

// function replaceOddEven(numbers) {
//   const newArr = numbers.map((ele) => {
//     if (ele % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   });
//   return newArr;
//   //   console.log(newArr);
// }
// console.log(replaceOddEven([1, 2, 3, 5, 7]));

// function replaceOddEven(arr) {
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push("Even");
//     } else {
//       result.push("Odd");
//     }
//   }
//   return result;
// }
// console.log(replaceOddEven([10, 15, 20, 25, 30]));

// function replaceOddEven(arr) {
//   const result = arr.map((ele) => {
//     if (ele % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   });
//   return result;
// }
// console.log(replaceOddEven([10, 15, 20, 25, 30]));

//12/12/2024
// Create a function that takes an array of numbers and return the first repeating number.

// Example:  [1,2,3,4,5,6,7,7,8,8,9,10,10]
// Returns 7 because 7 is the first number that is repeated.

// Example 2: [1,4,3,5,1,6,4,5]
// Returns 1

// Hint:  User a nested for loop
// if no repeating numbers are found, then return -1

// function repatingNum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return -1;
// }
// console.log(repatingNum([1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 10, 10]));
// console.log(repatingNum([1, 2, 3, 4, 5, 6, 7]));

// Create a function that takes an array of numbers and a target.  If any two numbers in the array added to together equals the target,
//  return true, otherwise return false

// Example: [1,2,3,6], target = 5
// Returns true because 2 + 3 = 5

// Example 2: [4,23,4,12,3], target = 7
// return true because 4 + 3 = 7

// Example 3: [23,4,34,4,5], target = 10
// return false because no two numbers added together equals 10

// function twoNum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (target === arr[i] + arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(twoNum([1, 2, 3, 6], 5));
// console.log(twoNum([4, 23, 4, 12, 3], 7));
// console.log(twoNum([23, 4, 34, 4, 5], 10));

//12/14/2024 (Brute Force = simple approach, naive) array 보다 object 으로 바꾸면 빨리 찾을수 있다

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// This is pretty hard.  HINT:  easiest way is to look up the sort method on google and see how u can use that

// think about why sorting would help this

// Input: s = "racecar", t = "carrace"
// Output: true
// 1. string1 and string 2 convert to array
//2. string1 and string 2 sort
//3. sting1===string2 true

//first example
function isAnagram(string1, string2) {
  //string1 = 'cara'
  //string2 = 'arca'
  const sortedString1 = string.split("").sort().join("");
  const sortedString2 = string.split("").sort().join("");
  return sortedString1 === sortedString2;
}
console.log(isAnagram("cara", "arca"));

//third example
const anagram = (s, t) => {
  if (s.split("").sort().join("") === t.split("").sort().join("")) {
    return true;
  }
  return false;
};
console.log(anagram("racecar", "carrace"));

//seond example
function isAnagram(s, t) {
  //'car' and 'arc'
  const charHash1 = {};
  const charHash2 = {};

  for (let i = 0; i < s.length; i++) {
    if (charHash1[s[i]]) {
      charHash1[s[i]]++;
      //charHash1[s[i]] = charHash1[s[i]] =1
    } else {
      charHash1[s[i]] = 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (charHash2[t[j]]) {
      charHash2[t[j]]++;
    } else {
      charHash2[t[j]] = 1;
    }
  }

  const lengthOfCharacters = Object.keys(charHash1).length;
  const lengthOfCharacters2 = Object.keys(charHash2).length;

  if (lengthOfCharacters !== lengthOfCharacters2) {
    return false;
  } else {
    for (const [key, value] of Object.entries(charHash1)) {
      if (charHash2[key] !== value) {
        return false;
      }
    }
    return true;
  }
}
console.log(isAnagram("jar", "jam"));

// Input: s = "jar", t = "jam"
// Output: false

//12/14/2024
// create a function that takes in an array of strings and return the longest word

// Example: ['hello', 'im so hungry', 'supercalafragisticexpialadocous']
// Returns 'supercalafragisticexpialadocous'

function longest(string) {
  let longest = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longest.length) {
      longest = string[i];
    }
  }
  return longest;
}

// const result = longest([
//   "hello",
//   "im so hungry",
//   "supercalafragisticexpialadocous",
// ]);
console.log(
  longest(["hello", "im so hungry", "supercalafragisticexpialadocous"])
);

// create a function that takes in a string and returns the same string but without any vowels

// Example: 'hello'
// Returns 'hll'
function noVowels(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result = result + string[i];
    }
  }
  return result;
}
console.log(noVowels("hello"));

// const removeVowels = (word) => {
//   const result = [];
//   for (const letter of word) {
//     if (
//       letter !== "a" ||
//       letter !== "e" ||
//       letter !== "i" ||
//       letter !== "o" ||
//       letter !== "u"
//     );
//     {
//       result.push(letter);
//     }
//   }
//   return result;
// };

// 12/17/2024 Create a function where given an array of numbers, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example: [0,1,0,3,12]
// Result: [1,3,12,0,0]

function moveZero(arr) {
  let zeroArray = [];
  let nonZeroArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArray.push(arr[i]);
    }
    if (arr[i] !== 0) {
      nonZeroArray.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroArray.length; i++) {
    nonZeroArray.push(zeroArray[i]);
  }

  return nonZeroArray;
}

console.log(moveZero([0, 1, 0, 3, 12]));
//12.21/2024
//create a function that takes an array of numbers and returns a string that contains the number of odd
//numbers in a format like this: "You have me 4 odd numbers"
//Note: The return string should take into consideration the plural or singular version of 'numbers'
//Example: oddNumbers([1,3,4,6])
//Returns: 'You gave me 2 odd numbers'
//Example: [1,0,4,6] returns: 'You gave me 1 odd number'
//Example: [4,6,8,10] returns: 'You gave me 0 odd numbers'
function oddNumbers(arr) {
  // let num = [];
  // let odd = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      // odd++
      num++
    }
  }
  if (num === 1) {
    // if (odd === 1){
    // return "You gave me " + odd + " odd number";
    return "You gave me " + num + " odd number"
  }
  // return "You gave me " + odd + " odd numbers"
  return "You gave me " + num + " odd numbers";
}
console.log(oddNumbers([1, 3, 4, 6]));
console.log(oddNumbers([1, 0, 4, 6]));
console.log(oddNumbers([4, 0, 4, 6]));

const oddNum = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      num++
    }
  }
  if (num === 1) {
    return `You gave me ${num} odd number`; //물결 사인 밑에것 `~ backticks
  } else {
    return `You gave me ${num} odd numbers`;
  }
};
console.log(oddNum([1, 3, 4, 5]));

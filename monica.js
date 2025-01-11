// Q1 11/7/24
// const users = [
//     {
//         id: 1,
//         name: "Alice",
//         age: 25,
//         email: "alice@example.com",
//         isActive: true
//     },
//     {
//         id: 2,
//         name: "Bob",
//         age: 30,
//         email: "bob@example.com",
//         isActive: false
//     },
//     {
//         id: 3,
//         name: "Charlie",
//         age: 28,
//         email: "charlie@example.com",
//         isActive: true
//     },
// ];

// print Charlie's age
// print Bob's email
// print Alice's id

// advanced questions
// write a for loop and print name if user is active

// console.log(users[2].age)
// console.log(users[1].email)
// console.log(users[0].id)

// for(let i = 0; i < users.length; i++) {
//     if(users[i].isActive === true){
//         console.log(users[i].name)
//     }
// }

// print out charles output
// for(let i = 0; i < users.length; i++) {
//     if(users[i].name === 'Charlie'){
//         console.log(users[i].id, users[i].age)
//         console.log(users[i].age)
//     }
// }

// const products = [
//     {
//         id: 103,
//         name: "Headphones",
//         price: 199.99,
//         category: "Accessories",
//         inStock: true,
//     },
//     {
//         id: 101,
//         name: "Laptop",
//         price: 799.99,
//         category: "Electronics",
//         inStock: true,
//     },
//     {
//         id: 102,
//         name: "Smartphone",
//         price: 599.99,
//         category: "Electronics",
//         inStock: false,
//     },
// ];

// print Smartphone's price
// print Headphones's price

// advanced questions
// write a for loop and print highest product's price and name
// let price = 0 (내가 알아서 적어야 한다)
// let n; (이름이 정해지지 않으면 여기서 닫아야 한다)
// for(let i = 0; i < products.length; i++){
//     if(products[i].price > price){
//         price = products[i].price
//         n = products[i].name
//     }
// }
// console.log(price, n)

// write a loop lowest price and print price, name, category

// let price = 10000 (내가 알아서 적어야 한다)
// let p;
// let n;
// let cat;

// for(let i = 0; i < products.length; i++){
//     if(products[i].price < price)  {
//         price = products[i].price
//         p = price
//         n = products[i].name
//         cat = products[i].category

//     }
// }
// console.log(p, n, cat) (만일 let 을 정하면 loop 은 밖에서 돌려야 한다)

// const events = [
//     { eventId: 1, name: "Conference", date: "2024-05-15", location: "New York", attendees: ["Alice", "Charlie"] },
//     { eventId: 2, name: "Workshop", date: "2024-06-20", location: "San Francisco", attendees: ["Bob"] },
//     { eventId: 3, name: "Meetup", date: "2024-07-10", location: "Toronto", attendees: ["Alice", "Ethan", "George"] },
//     { eventId: 4, name: "Seminar", date: "2024-08-05", location: "Vancouver", attendees: ["Charlie", "Diana"] },
//     { eventId: 5, name: "Networking", date: "2024-09-15", location: "London", attendees: ["Fiona", "George"] },
//     { eventId: 6, name: "Webinar", date: "2024-10-20", location: "Online", attendees: ["Alice", "Bob", "Charlie", "Diana"] },
//     { eventId: 7, name: "Hackathon", date: "2024-11-01", location: "Sydney", attendees: ["Ethan", "Fiona"] },
// ];

// // print Alice and event name in each object

// console.log(events[0].name, events[1].name, events[2].name, events[3].name, events[4].name, events[5].name, events[6].name)
// console.log(events[0].attendees[0])
// console.log(events[0].attendees[0])

// advanced questions
// write a for loop and print event name, location and date where George attends (for loop안에 for loop )

// 11/9/2024 homework
// 1. Write a function called sayHello that takes no parameters and returns the string "Hello, World!".
// function sayHello() {
//      return "Hello, World!";
// }
//  const greeting = sayHello()
//  console.log(greeting)

// console.log(sayHello()) const를 쓰지 않을 경우

//  function welcomeParty() {
//    return "Joe's House";
//  }
//  const place = welcomeParty()
//  console.log(place)

//2. Write a function called add that takes two numbers as parameters and returns their sum.
// function add(num1, num2) {
//     return num1 + num2;
// }
// const sum = add(1, 3)
// console.log(sum)

// console.log(add(1, 3)) const를 쓰지 않을 경우

// function subtract(num1, num2) {
//    return num1 - num2;
// }
// const result = subtract(1, 3)
// console.log(result)

// 3. Write a function called square that takes one number as a parameter and returns its square (the number multiplied by itself).
// function square(num) {
//     return num * num;
// }
// const double = square(7)
// console.log(double)

// console.log(square(7)) const를 쓰지 않을 경우

// function cube(num) {
//    return num * num * num;
// }
// const cubevalue = cube(7)
// console.log(cubevalue)

// 4. Write a function called isEven that takes a number as a parameter and returns true if the number is even, and false if it is odd.
// function isEven(num){
//     return num % 2 === 0;
// }
// const trueOfalse = isEven(80)
// console.log(trueOfalse)

// console.log(isEven(80)) const를 쓰지 않을 경우
// console.log(isEven(765)) const를 쓰지 않을 경우

// function isOdd(num) {
//    return num % 2 !== 0;
// }
// const oddOk = isOdd(70)
// console.log(oddOk)

// 5. Write a function called max that takes two numbers as parameters and returns the larger number. (다른버젼으로는 Math.max)
// function max(num1, num2){
//      if (num1 > num2) {
//         return num1;
//      }  else {
//         return num2;
//      }

// }
// const compare = max(13, 87)
// console.log(compare)

// console.log(max(13, 87)) const를 쓰지 않을 경우
// console.log(max (3434, 21)) const를 쓰지 않을 경우

// function max(num1, num2){
//    return Math.max()
// }
// const compare = Math.max(3434, 21)
// console.log(compare)

// 6. Write a function called getArrayLength that takes an array as parameters and returns the length of array.
// function getArrayLength(arr){
//     return arr.length;
// }
// const arrayLength1 = getArrayLength([1, 2, 3, 4, 5, 6])
// const arrayLength2 = getArrayLength(['phil', 'marco'])
// console.log(arrayLength1)
// console.log(arrayLength2)

// console.log(getArrayLength([1, 2, 3, 4, 5, 6])) const를 쓰지 않을 경우

// 11/15/2024

// 1. Write a function called getHighestNumbers that takes an array of numbers as parameters and returns
// the highest number
// function getHighestNumbers(arr){
//    let highest = 0;
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > highest) {
//          highest = arr[i];
//       }
//    }
//    return highest;
// }
// const arr = getHighestNumbers([5, 67, 98, 1]);
// console.log(arr);

// 2. Write a function called getLongestText that takes an array of strings as parameters and returns longest string in javascript
// function getLongestText(string){
//    let longest = '';
//    for (let i = 0; i < string.length; i++) {
//       if(string[i].length > longest.length) {
//        longest = string[i];
//       }
//    }
//    return longest;
// }
// const longeststring = getLongestText(['i love QA class', 'class', 'QA'])
// console.log(longeststring)

// 3. Write a function called getOldestUser that takes an array of object as a parameter and returns the oldest user's name
// object example: {firstName: "John", lastName: "Doe", age: 24}
// function getOldestUser(users){
//    let oldestUser= users[0];
//    for (let i = 0; i < users.length; i++){
//       if (users[i].age > oldestUser.age) {
//          oldestUser = users[i]
//       }
//    }
//    return oldestUser.name;
// }
// const usersArray = [{name: "John", age: 20}, {name: "Mary", age: 30}, {name: "Jane", age: 60}];
// const oldestUserName = getOldestUser(usersArray);
// console.log(oldestUserName)

// 4. Write a function called isEvenAndDivideBySix that takes a number as a parameter and returns true if the number is even
// and can be divided by 6, and false if it is odd or cannot be divided by 6 in javascript
// function isEvenAndDivideBySix(num){
//    return num % 2 === 0 && num % 6 === 0;
// }
// const isEvenAndDSix = isEvenAndDivideBySix(24);
// console.log(isEvenAndDSix)

// 5. Write a function called addValueToArray that takes an array of strings as first parameter and a string as second parameter
// and returns array of strings that includes second parameter
// example : addValueToArray(["a", "b", "c"], "d")  OUTPUT : ["a", "b", "c", "d"]
// function addValueToArray(string1, string2){
//    return string1.push(string2);
// }
// const firstA = ['a', 'b'];
// const secondA = ['c'];
// const combine = addValueToArray(firstA, secondA);
// console.log(combine)

// 11/17/2024
// 1- Write a function called helloYourName that takes a user's first name and last - name and prints:
// "Hello, [FirstName LastName]!"
// function helloYourName(firstName, lastName){
//    return "Hello, " + firstName + " " + lastName + "!";
// }
// const myname = helloYourName('Monica', 'Lee');
// console.log(myname);

// 2- Write a function called convertStringToArray that takes a string argument and - return an array
// example : convertStringToArray("hello")
// output : ["h", "e", "l", "l", "o"]
// function convertStringToArray(string){
//    return string.split('');
// }
// const sta = convertStringToArray('hello');
// console.log(sta)

// function convertStringToArray(string){
//    const array = [];
//    for(let i = 0; i < string.length; i++){
//       array.push(string[i]);
//    }
//    return array;
// }
// const sta = convertStringToArray('hello');
// console.log(sta)

// 3- Remove Duplicates
// - Write a function removeDuplicates(arr) that removes duplicate values from an array.
// example: removeDuplicates([1, 3, 1, 4, 2, 1])
// output : [1, 3, 4, 2]
// function removeDuplicates(arr) {
//     let newArray = [];
//     for (i = 0; i < arr.length; i++) {
//         if (!newArray.includes(arr[i])) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;

// }
// console.log(removeDuplicates([1, 3, 1, 4, 2, 1]));

// const removeDuplicates = (numArry) => {
//     const newArr= [numArry[0]]

//     for(let i = 0; i < numArry.length; i++){
//       let isDuplicated = false

//       for(let j = 0; j < newArr.length; j++){
//         if(newArr[j] === numArry[i]){
//           isDuplicated = true
//           break;
//         }
//       }
//       if(!isDuplicated){
//         newArr[newArr.length] = numArry[i]
//       }
//     }
//     return newArr
//   }

//   console.log(removeDuplicates([1,4,2,3,4,1,4,1,2,4,6,6,2,1,12,21,]))
//   console.log(removeDuplicates([1,4,2,3,4,1,4,1,2,4,6,6]))

// 4- Grade Calculator
// - Write a function calculateGrade(score) that returns:
// "A" for scores 90 and above.
// "B" for scores 80–89.
// "C" for scores 70–79.
// "D" for scores 60–69.
// "F" for scores below 60.

// function calculateGrade(score) {
//    if (score >= 90) {
//       return "A";
//    } else if (score >= 80) {
//       return "B";

//    } else if (score >= 70) {
//       return "C";
//    } else if (score >= 60) {
//       return "D";
//    } else (score > 60)
//    return F;

// }
// const grade = calculateGrade(81);
// console.log(grade)

// 5- Write a function createUser(name, age, gender) that returns user object
// - please add the validation that name should be only string, gender should be "male" or "female" and age should be only number

// example : createUser("marco", 10, "male")
// output : {name: "marco", age: 10, gender: "male}

// error case 1 : when name is not a string
// output : "name must be the string"

// error case 2 : when age is not a number
// output : "age must be a number"

// error case 3 : when gender is not one of "male" or "female"
// output : "gender must be male or female"
// function createUser(name, age, gender){
//     if(typeof name !== 'string'){
//         return "name must be the string";
//     } else if(typeof age !== 'number'){
//         return "age must be a number";
//     } else if(gender !== 'male' && gender !== 'female'){
//         return "gender must be male or female";
//     } else {
//         return {
//             name: name,
//             age: age,
//             gender: gender,
//           }
//          }
// }
//     console.log(createUser('monica', 100, 'female'))

// function createUser(name, age, gender) {
//   if (typeof name !== "string") {
//     return "Name must be string";
//   } else if (typeof age !== "number") {
//     return "Age must be numbers";
//   } else if (gender !== "male" && gender !== "female") {
//     return "gender must be 'male' or 'female'";
//   }
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//   };
// }
// console.log(createUser("matthew", 39, "lady"));

//11/21/2024 Arrow function =>
//  const createUser = (name, age, gender) => {
//   if (typeof name !== "string") {
//     return "Name must be string";
//   } else if (typeof age !== "number") {
//     return "Age must be numbers";
//   } else if (gender !== "male" && gender !== "female") {
//     return "gender must be 'male' or 'female'";
//   }
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//   };
// };
// console.log(createUser("matthew", 39, "lady"));

// const calculateGrade = (score) => {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// };
// // console.log(calculateGrade(55));
// const grade = calculateGrade(55);
// console.log(grade);

// const removeDuplicates = (numArry) => {
//     const newArr= [numArry[0]]

//     for(let i = 0; i < numArry.length; i++){
//       let isDuplicated = false

//       for(let j = 0; j < newArr.length; j++){
//         if(newArr[j] === numArry[i]){
//           isDuplicated = true
//           break;
//         }
//       }
//       if(!isDuplicated){
//         newArr[newArr.length] = numArry[i]
//       }
//     }
//     return newArr
//   }

//   console.log(removeDuplicates([1,4,2,3,4,1,4,1,2,4,6,6,2,1,12,21,]))
//   console.log(removeDuplicates([1,4,2,3,4,1,4,1,2,4,6,6]))

// const removeDuplicates = (arr) => {
//   let newArray = [];
//   for (i = 0; i < arr.length; i++) {
//     if (!newArray.includes(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };
// console.log(removeDuplicates([1, 3, 1, 4, 2, 1]));

// const max = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };
// const compare = max(13, 87);
// console.log(compare);

// // console.log(max(13, 87)) const를 쓰지 않을 경우
// // console.log(max (3434, 21)) const를 쓰지 않을 경우

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const sum = add(1, 3);
// console.log(sum);

// console.log(add(1, 3)) const를 쓰지 않을 경우

//11/23/2024

// const students = [
//   {
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 22,
//     occupation: "Intern",
//     GPA: 3.5,
//   },
//   {
//     name: "Charlie Brown",
//     email: "charlie.brown@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Diana Prince",
//     email: "diana.prince@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.7,
//   },
//   {
//     name: "Ethan Hunt",
//     email: "ethan.hunt@example.com",
//     age: 23,
//     occupation: "Student",
//     GPA: 3.6,
//   },
//   {
//     name: "Fiona Green",
//     email: "fiona.green@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "George Lucas",
//     email: "george.lucas@example.com",
//     age: 24,
//     occupation: "Freelancer",
//     GPA: 3.4,
//   },
//   {
//     name: "Hannah Davis",
//     email: "hannah.davis@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Ivy Adams",
//     email: "ivy.adams@example.com",
//     age: 21,
//     occupation: "Research Assistant",
//     GPA: 4.0,
//   },
//   {
//     name: "Jack Wilson",
//     email: "jack.wilson@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.3,
//   },
//   {
//     name: "Kara Kent",
//     email: "kara.kent@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.7,
//   },
//   {
//     name: "Liam King",
//     email: "liam.king@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Mia Wong",
//     email: "mia.wong@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.8,
//   },
//   {
//     name: "Noah Patel",
//     email: "noah.patel@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Olivia Taylor",
//     email: "olivia.taylor@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Peter Parker",
//     email: "peter.parker@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.6,
//   },
//   {
//     name: "Quinn Blake",
//     email: "quinn.blake@example.com",
//     age: 23,
//     occupation: "Research Assistant",
//     GPA: 3.9,
//   },
//   {
//     name: "Riley Cooper",
//     email: "riley.cooper@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.8,
//   },
//   {
//     name: "Sophia Carter",
//     email: "sophia.carter@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.7,
//   },
//   {
//     name: "Thomas Evans",
//     email: "thomas.evans@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Uma Grant",
//     email: "uma.grant@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "Victor Hill",
//     email: "victor.hill@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Willow Knight",
//     email: "willow.knight@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.9,
//   },
//   {
//     name: "Xander Lopez",
//     email: "xander.lopez@example.com",
//     age: 22,
//     occupation: "Research Assistant",
//     GPA: 3.5,
//   },
//   {
//     name: "Yara Moore",
//     email: "yara.moore@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Zara Nelson",
//     email: "zara.nelson@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Aaron Perez",
//     email: "aaron.perez@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Bella Quinn",
//     email: "bella.quinn@example.com",
//     age: 23,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Caleb Ross",
//     email: "caleb.ross@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Daisy Stone",
//     email: "daisy.stone@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.9,
//   },
//   {
//     name: "Evan Torres",
//     email: "evan.torres@example.com",
//     age: 21,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Faith Underwood",
//     email: "faith.underwood@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Gavin Vega",
//     email: "gavin.vega@example.com",
//     age: 20,
//     occupation: "Research Assistant",
//     GPA: 3.7,
//   },
//   {
//     name: "Harper White",
//     email: "harper.white@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.6,
//   },
//   {
//     name: "Isaac Young",
//     email: "isaac.young@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.9,
//   },
//   {
//     name: "Jenna Zane",
//     email: "jenna.zane@example.com",
//     age: 21,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Kyle Anderson",
//     email: "kyle.anderson@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Lila Bennett",
//     email: "lila.bennett@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "Mason Clark",
//     email: "mason.clark@example.com",
//     age: 21,
//     occupation: "Research Assistant",
//     GPA: 3.5,
//   },
//   {
//     name: "Nina Diaz",
//     email: "nina.diaz@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Owen Edwards",
//     email: "owen.edwards@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Paige Fisher",
//     email: "paige.fisher@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Quincy Garcia",
//     email: "quincy.garcia@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Rose Harper",
//     email: "rose.harper@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.6,
//   },
//   {
//     name: "Sam Ives",
//     email: "sam.ives@example.com",
//     age: 22,
//     occupation: "Part-time Worker",
//     GPA: 3.8,
//   },
//   {
//     name: "Tina Jones",
//     email: "tina.jones@example.com",
//     age: 23,
//     occupation: "Research Assistant",
//     GPA: 3.7,
//   },
//   {
//     name: "Ulysses Knight",
//     email: "ulysses.knight@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Vera Lane",
//     email: "vera.lane@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Wyatt Morgan",
//     email: "wyatt.morgan@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.4,
//   },
//   {
//     name: "Xenia Neal",
//     email: "xenia.neal@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Yusuf Ortiz",
//     email: "yusuf.ortiz@example.com",
//     age: 23,
//     occupation: "Intern",
//     GPA: 3.6,
//   },
//   {
//     name: "Zoe Parker",
//     email: "zoe.parker@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 4.0,
//   },
// ];

// console.log(students);

// 1. Get students average GPA (Output 3.7057692307692305 to 3.71)
// let roundedNum = num.toFixed(2);

// const getStudentsAverageGPA = () => {
//   // function getStudentsAverageGPA() {
//   let totalGPA = 0;
//   for (let i = 0; i < students.length; i++) {
//     totalGPA = totalGPA + students[i].GPA;
//   }
//   const averageGPA = totalGPA / students.length;
//   return averageGPA;
// };
// console.log(getStudentsAverageGPA().toFixed(2));

// // 2. Get students number GPA > 3.9 (Output 6 students)

// const countStudentNumberWith39GPA = () => {
//   // function countStudentNumberWith39GPA() {
//   let count = 0;
//   for (let i = 0; i < students.length; i++)
//     if (students[i].GPA > 3.9) {
//       count++;
//     }
//   return count;
// };
// console.log(countStudentNumberWith39GPA());

// // 3. Get average GPA student age > 21 (Output 3.64)

// const getAverageGPAStudentsOver21 = () => {
//   // function getAverageGPAStudentsOver21() {
//   let totalGPA = 0;
//   let count = 0;
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age > 21) {
//       totalGPA = totalGPA + students[i].GPA;
//       count++;
//     }
//   }
//   return totalGPA / count;
// };
// console.log(getAverageGPAStudentsOver21().toFixed(2));

// 11/30/2024 create a function that console.log alphabetic indexing
// HINT : const alphabets = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
// HINT : use .length
// HINT : for-loop i is index

// Example:
// getAlphabeticIndex("c")
// output : 3
// getAlphabeticIndex("a")
// output : 1
function getAlphabeticIndex(letter) {
  const alphabet = ["a", "b", "c", "d", "e"];
  for (i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      return i + 1;
    }
  }
  return -1;
}
console.log(getAlphabeticIndex("a")); //output 1
console.log(getAlphabeticIndex("dfd")); //output -1
console.log(getAlphabeticIndex("d")); //output 4

// const removeDuplicates = (numArry) => {
//   const newArr = [numArry[0]];

//   for (let i = 0; i < numArry.length; i++) {
//     let isDuplicated = false;

//     for (let j = 0; j < newArr.length; j++) {
//       if (newArr[j] === numArry[i]) {
//         isDuplicated = true;
//         break;
//       }
//     }
//     if (!isDuplicated) {
//       newArr[newArr.length] = numArry[i];
//     }
//   }
//   return newArr;
// };

// console.log(
//   removeDuplicates([1, 4, 2, 3, 4, 1, 4, 1, 2, 4, 6, 6, 2, 1, 12, 21])
// );

// const removeDuuplicates1 = (numArr) => {
//   const output = [];
//   const compareIndex = (number, index) => {
//     return index === numArr.indexOf(number);
//   };
//   for (let i = 0; i < numArr.length; i++) {
//     if (compareIndex(numArr[i], i)) {
//       output.push(numArr[i]);
//     }
//   }
//   return output;
// };
// console.log(
//   removeDuuplicates1([1, 4, 2, 3, 4, 1, 4, 1, 2, 4, 6, 6, 2, 1, 12, 21])
// );

// const removeDuplicates3 = (array) => {
//   return array.filter((num, index) => index === array.indexOf(num));
// };
// console.log(
//   removeDuplicates3([1, 4, 2, 3, 4, 1, 4, 1, 2, 4, 6, 6, 2, 1, 12, 21])
// );

// 11/27/2024
// const findDivisible = (num, div) => {
//   let numbers = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % div === 0) {
//       numbers.push(num[i]);
//     }
//   }
//   return numbers;
// };
// console.log(findDivisible([10, 15, 20, 25, 30], 3)); //output 15, 30

// const findDivisible = (num, div) => {
//   return num.map((ele) => {
//     if (ele % div === 0) {
//       return ele;
//     } else {
//       return "No";
//     }
//   });
//   return leaveblankorwhateverifconstiswitharrowfunction;
// };
// console.log(findDivisible([10, 15, 20, 25, 30], 3));

// function countEvenOdd(arr) {
//   let even = 0;
//   let odd = 0;
//   arr.map((ele) => {
//     if (ele % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   });
//   return { even, odd };
// }
// console.log(countEvenOdd([1, 3, 4, 6, 5, 7, 9, 11]));

// function countEvenOdd(arr) {
//   let count = { even: 0, odd: 0 };
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count.even++;
//     } else {
//       count.odd++;
//     }
//   }
//   return count;
// }
// console.log(countEvenOdd([1, 3, 4, 6, 5, 7, 9, 11]));

//12/22/2024 to 12/24/2024
// 1. Write a function add(a, b) that returns the sum of two numbers.
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); //5

//2. Write a function celsiusToFahrenheit(celsius) to convert a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); //32

// 3. Write a function maxOfTwo(a, b) that returns the larger of two numbers.
function maxOfTwo(a, b) {
  // if (a > b) {
  //   return a;
  // } else {
  //   return b;
  return a > b ? a : b;
}
console.log(maxOfTwo(10, 20)); //output 20

// 4. Write a function isEven(num) that returns true if a number is even, otherwise false.
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4)); //output true
console.log(isEven(7)); //output false

// 5. Write a function reverseString(str) that takes a string and returns it reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); //output 'olleh'
//split('') ['h', 'e', 'l', 'l', 'o'] ('')single character (' ')string by space
//reverse() ['o', 'l', 'l', 'e', 'h']
//joint("") 'olleh
//(i=4) word = "" + o = o
//(i=3) word = o + l = ol
//(i=2) word = ol + l = oll
//(i=1) word = oll + e = olle
//(i=0) word = olle + h = olleh

function reverseString(str2) {
  let word = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    word = word + str2[i];
  }
  return word;
}
console.log(reverseString("helloo"));

// 6. Write a function countVowels(str) that counts the number of vowels in a string.
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello world")); // Output: 3)
//i = 0; str[0] = h,count 0
//i = 1; str[1] = e, count1 ++
//i = 2; str[2] = l, count 1
//i = 3; str[3] = l, count 1

// 7. Write a function findLargest(arr) that returns the largest number in an array.
function findLargest(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargest([1, 2, 3, 4, 5])); //output 5

// 8. Write a function sumArray(arr) that returns the sum of all numbers in an array.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10 since starting sum = 0 starting
//arr[0] = 1, sum = sum + arr[0], sum = 0 + 1 -> sum = 1
//arr[1] = 2, sum = sum + arr[1], sum = 1 + 2 -> sum = 3
//arr[2] = 3, sum = sum + arr[2], sum = 3 + 3 -> sum = 6
//arr[3] = 4, sum = sum + arr[3], sum = 6 + 4 -> sum = 10

//9. Write a function fizzBuzz(n) that prints numbers from 1 to n.
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(5); //this will now work no need to wrap in console.log
// Output: 1, 2, "Fizz", 4, "Buzz"  ( 1 to n meaning inclusive) (i, 'fizz') 3 Fizz로 된다

//10. Write a function findIndex(arr, value) that returns the index of a given value in an array if not exists, then return "not exist"
function findIndex(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1; //unsuccessful search or failure
}
console.log(findIndex([10, 20, 30], 20)); //output 1
//arr[0]; 10 === 20 false
//arr[1]; 20 === 20 true
//arr[2]; 30 === 20 false

// 11. Write a function mergeArrays(arr1, arr2) that merges two arrays into one.
function mergeArrays(arr1, arr2) {
  //   return arr1.concat(arr2);
  // }
  for (let i = 0; i < arr2.length; i++) {
    //arr2 이다
    arr1.push(arr2[i]); // Push each element from arr2 into arr1
  }
  return arr1; // Return the modified/merged arr1
}
console.log(mergeArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]
//arr1 = [1,2]
//arr2 = [3,4]
//loop arr2: first iteration (i=0), arr2[0]=3, arr1.push(3)->arr1 becomes [1,2,3]
//loop arr2: second iteration (i=1), arr[1]=4, arr1.push(4)->arr1 becomes [1,2,3,4]

// 12. Write a function containsSubstring(str, substring) that checks if one string contains another.
function containsSubstring(str, substring) {
  return str.includes(substring);
}
console.log(containsSubstring("hello world", "world")); // Output: true
console.log(containsSubstring("hello world", "Wor")); // Output: false case sensitive
console.log(containsSubstring("hello world", "marco")); //Output: false

//13. Write a function capitalizeWords(str) that capitalizes the first letter of each word in a string.물어보기
function capitalizeWords(str) {
  // Split the string into words
  return str
    .split(" ") // Split the string by spaces
    .map((word) => {
      //map is used to transform individual elements into an array
      // Capitalize the first letter and combine it with the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" "); // Join the array back into a string with spaces into single string
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"
//split 'hello world' -> ['hello', 'world']
//map() gets first character(0) of the word and converts into uppercase
//slice(1) restof the word (starting from index1) and converts into lowercase
//'hello' becomes "Hello" and 'world' becomes 'World'
//join: "Hello World"

//14. Write a function removeDuplicates(arr) that removes duplicates from an array.
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]

//15. Write a function secondLargest(arr) that finds the second-largest number in an array.
function secondLargest(arr) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      //Found a new largest number
      second = first; // Update second to the old first
      first = arr[i]; // Update first to the new largest element
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i]; // Update second if the current element is between first and second
    }
  }
  return second;
}
console.log(secondLargest([10, 20, 30])); // Output: 20
//initial value: first = 0, second = 0,
//iteration 1 (arr[0]=10): arr[0] > frist -> first = 10, second = 0
//iteration 2 (arr[1]=20): arr[1] > first -> second = 10, first = 20
//iteration 3 (arr[2]=30): arr[2] > first -> second = 20, first = 30
//final output second = 20

//16. Write a function square(num) that returns the square of a number.
function square(num) {
  // return num * num;
  return num ** 2;
}
console.log(square(4)); // Output: 16

//17. Write a function sumDigits(num) that returns the sum of the digits of a number.도무지 모르겠음
const sumDigits = (num) => {
  let sum = 0;
  const splitNum = num.split("");
  for (let i = 0; i < splitNum.length; i++) {
    //Number(string or digit) constructor, class or parseInt(string or digit)
    const int = Number(splitNum[i]);
    sum = sum + int;
  }
  return sum;
};
function sumDigits2(num) {
  let sum = 0;
  for (let digit of num.toString()) {
    //convert number toString() each character is digit
    sum += parseInt(digit); //converts each character back to an integer and add to sum
  }
  return sum;
}
console.log(sumDigits("123")); // Output: 6
console.log(sumDigits2("246")); //output: 12
//convert 123 to string '123'
//first iteration digit = '2', parseInt('2') = 2, sum becomes 2
//second iteration digit = '4', parseInt('4') = 4, sum becomes 2+4 = 6
//third iteration digit = '6', pareInt('6') = 6, sum becomes 6+6 = 12
//final sum 12

// 18. Write a function isMultipleOf(a, b) that checks if a is a multiple of b.
function isMultipleOf(a, b) {
  return a % b === 0; // % is modular
}
console.log(isMultipleOf(15, 5)); // Output: true
//returns true because 15/5 leaves no remainder

//19. Write a function countWords(str) that counts the number of words in a string.
function countWords(str) {
  const words = str.split(" "); // space between ' and '
  //const words = str.trim().split(/\s+/).filter(Boolean);
  return words.length;
}
console.log(countWords("hello world again")); // Output: 3

//20. Write a function average(arr) that calculates the average of numbers in an array.
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(average([10, 20, 30])); // Output: 20

//21. Write a function reverseArray(arr) that reverses the elements in an array.
function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
    // reverse = reverse + arr[i]; (this output gives a string 321 not [3,2,1])
  }
  return reverse;
}
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]

//22. Write a function longestWord(str) that returns the longest word in a sentence.
function longestWord(str) {
  let longest = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    // for (let word of words) {}
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(longestWord("The quick brown fox")); // Output: "quick" WHY NOT BROWN? only
//returns the first longest word as it typical in many implementations not all words

//23. Write a function repeatString(str, n) that repeats a string n times.
function repeatString(str, n) {
  let repeat = "";
  for (let i = 0; i < n; i++) {
    repeat = repeat + str;
  }
  return repeat;
}
console.log(repeatString("abc", 3)); // Output: "abcabcabc"

//24. Write a function removeFalsyValues(arr) that removes all falsy values (e.g., false, 0, null, undefined, NaN, "") from an array.
// function removeFalsyValues(arr) {
//   let falsy = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) { //숫자그리고 true 외에는 다른 컨디션이 안들어간다
//       falsy.push(arr[i]);
//     }
//   }
//   return falsy;
// }
// console.log(removeFalsyValues([1, 0, "", null, 2, false])); // Output: [1, 2])
function removeFalsyValues2(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues2([3, 2, null, 0, true, undefined, 4])); //[3,2,true,4]
//25. Write a function chunkArray(arr, size) that splits an array into chunks of the specified size. 알아먹기 힘듦
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    //i++가 아니라 i +=size 가 들어간다
    result.push(arr.slice(i, i + size)); //slice from i to i+size (subarray)
  }
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]])

//26. Write a function convertToRoman(num) that converts a number into Roman numerals.
// function convertToRoman(num) {
//   const romanNumerals = {
//     M: 1000,
//     CM: 90,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   let result = '';
//   for (const key in romanNumerals) {
//     while (num >= romanNumerals[key]) {
//       result += key;
//       num -= romanNumerals[key];
//     }
//   }
//   return result;
// }
// console.log(convertToRoman(4)); //output IV
function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 500, numeral: "CM" },
    { value: 400, numeral: "D" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  if (num === 0) return "";
  for (let i = 0; i < romanNumerals.length; i++) {
    if (num >= romanNumerals[i].value) {
      return (
        romanNumerals[i].numeral + convertToRoman(num - romanNumerals[i].value)
      );
    }
  }
}
console.log(convertToRoman(4));
//27. Write a function sumRange(start, end) that calculates the sum of numbers in a range from start to end.
function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumRange(1, 5)); // Output: 15
//28. Write a function lastElement(arr) that returns the last element of an array.
function lastElement(arr) {
  let last = [];
  for (let i = 0; i < arr.length; i++) {
    last = arr[i];
  }
  return last;
}
console.log(lastElement([1, 2, 3])); // Output: 3 loops until the last number and stops

// //29. Write a function minOfThree(a, b, c) that returns the smallest of three numbers.
// function minOfThree(a, b, c) {
//   return Math.min(a, b, c);
// }
// console.log(minOfThree(5, 10, 3)); // Output: 3
function minOfThree(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}
console.log(minOfThree(5, 10, 3)); // Output: 3

//30. Write a function multiplyArray(arr, factor) that multiplies each element in an array by a given factor.
function multiplyArray(arr, factor) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * factor);
  }
  return result;
}
console.log(multiplyArray([1, 2, 3], 2)); // Output: [2, 4, 6]
function multiplyArray(arr, factor) {
  // using map function
  return arr.map((element) => element * factor);
}
console.log(multiplyArray([1, 2, 3], 2));

//12/25/2024
// function printChristmasTree(height) {
//   for (let i = 1; i <= height; i++) {
//     const spaces = ' '.repeat(height - i);
//     const stars = '*'.repeat(i * 2 - 1);
//     console.log(spaces + stars);
//   }
// }
// printChristmasTree(10);

//31. Find all pairs in an array that sum to a target value.
// Write a function findPairs(arr, target) that finds all pairs of numbers in the array that add up to a given target.
function findPairs(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // j = i + 1 j < arr.length avoids duplicate pairs
      if (arr[i] + arr[j] === target) {
        //예전에 true false 찾는것과 비슷하다
        pairs.push([arr[i], arr[j]]); // target 맞으면 두개로 나눈다
      }
    }
  }
  return pairs;
}
console.log(findPairs([1, 2, 3, 4, 5], 6)); // Output: [[1, 5], [2, 4]]

//32. Find common elements in two arrays.
// Write a function findCommonElements(arr1, arr2) that finds common elements between two arrays.
function findCommonElements(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //두개를 비교하기
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]); // pushing to a new array "commonElemts"
        break; // avoids duplicate elements
      }
    }
  }
  return result;
}
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
//33. Count the frequency of elements in an array.
// Write a function countFrequency(arr) that uses a hash map to count how many times each element appears in an array.
function countFrequency(arr) {
  const frequencyMap = {};
  for (const element of arr) {
    if (frequencyMap.hasOwnProperty(element)) {
      //constructor hasOwnProperty
      frequencyMap[element]++; //if element already in frequency object, increment its ++
    } else {
      // frequencyMap[element] = 1; //otherwise, initialize its count to 1
    }
  }
  return frequencyMap;
}
console.log(countFrequency(["a", "b", "a", "c", "b"])); // Output: {a: 2, b: 2, c: 1}

function countFrequency2(arr) {
  //frquencyMap의 공식이다.
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }
  return frequency;
}
console.log(countFrequency2(["a", "b", "a", "c", "b"])); // Output: {a: 2, b: 2, c: 1}
// 34. Check for anagram strings.
// Write a function isAnagram(str1, str2) that uses a hash map to check if two strings are anagrams.
const isAnagram = (str1, str2) => {
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
    return true;
  }
  return false;
};
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
//35. Find the first non-repeating character in a string.
// Write a function firstNonRepeatingChar(str) that finds the first character that does not repeat in the string using a hash map.
const firstNonRepeatingChar = (word) => {
  const array = word.split("");
  // console.log(array);
  let obj = {};
  // console.log(obj);
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }
  const letters = Object.keys(obj); //key, value, (S:3) as pairs
  for (const letter of letters) {
    if (obj[letter] === 1) {
      return letter;
    }
  }
};
// console.log(firstNonRepeatingChar("swiss")); // Output: "w"
// console.log(firstNonRepeatingChar("aabbcc")); // Output: null, undefined
// console.log(firstNonRepeatingChar("hello")); // Output: "h"

function firstNonRepeatingChar2(str) {
  let frequencyMap = {};
  for (let i = 0; i < str.length; i++) {
    //공식.
    let char = str[i];
    if (frequencyMap[char]) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    //loop thru string again to find non-repeat char
    if (frequencyMap[str[i]] === 1) {
      return str[i]; //return the first character that appears only once
    }
  }
  return null; //if no non-repeating character is found, return null
}
console.log(firstNonRepeatingChar2("swiss")); // Output: "w"
console.log(firstNonRepeatingChar2("aabbcc")); // Output: null, undefined
console.log(firstNonRepeatingChar2("hello")); // Output: "h"

//36.  Flatten a Nested Array (Two Loops):
// Write a function flattenArray(arr) to flatten a nested array using two loops.
function flattenArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //설명이 필요함 if an array, iterate over its element
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]); //array 가 아니면 , 그냥 직접적으로 element 만 push 한다다
    }
  }
  return result;
}
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
  ])
); // Output: [1, 2, 3, 4]

//37. Group Strings by Length:
// Write a function groupByLength(arr) to group strings by their length.
function groupByLength(arr) {
  const grouped = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const length = str.length;
    if (!grouped[length]) {
      grouped[length] = []; // 없을 경우우
    }
    grouped[length].push(str); //숫자나오는 순대 차례로 넣으면 된다다
  }
  return grouped;
}
console.log(groupByLength(["a", "abc", "de", "fgh"])); // Output: {1: ["a"], 2: ["de"], 3: ["abc", "fgh"]}

// 38. Count Characters in Words:
// Write a function countChars(arr) to count how many times each character appears in an array of strings.
function countChars(arr) {
  const charCount = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    for (let j = 0; j < str.length; j++) {
      const char = str[j]; //iterate thru each character in the current string
      if (charCount[char]) {
        charCount[char] = charCount[char] + 1; //있으면 세는 것을 시작한다
      } else {
        charCount[char] = 1; //아니면 1로 간주된다
      }
    }
  }
  return charCount;
}
console.log(countChars(["apple", "banana"])); // Output: {a: 4, p: 2, l: 1, e: 1, b: 1, n: 2}

// 39. Group Numbers by Remainder:
// Write a function groupByRemainder(arr, divisor) to group numbers by their remainder when divided by a number.
function groupByRemainder(arr, divisor) {
  const grouped = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const remainder = num % divisor;
    if (!grouped[remainder]) {
      grouped[remainder] = []; //나눠지지 않을경우
    }
    grouped[remainder].push(num); //숫자에 나눠지면 push 한다
  }
  return grouped;
}
console.log(groupByRemainder([1, 2, 3, 4, 5], 2)); // Output: {0: [2, 4], 1: [1, 3, 5]}
//2로 나누어서 0 이 남으면 0으로 모으고 1이 남으면 1로 모은다

//40. Two Sum Using Hash Map:
// Write a function twoSum(arr, target) that finds two numbers in an array that add up to a target using a hash map.
const twoSum = (arr, target) => {
  const hash = {}; // object 모아둔다.
  for (const a of arr) {
    // for of loop
    const remainder = target - a; //assign remainder
    if (hash[remainder]) {
      return [remainder, a];
    }
    hash[a] = a;
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [2, 7]
//9-2=7, 7 이 remainnder 이다 is not in the has map yet, we store 2 hash = {2,2}
//9-7=2, 2 가 remainder 이지만 2 is already in the hash map, 2가 미리 저정했기에 7을 더하면 9가 된다 여기서 멈춘다
console.log(twoSum([3, 2, 4], 6)); // output 6
// 6 - 3 = 3, 3을 저장
// 6 - 2 = 4, 2 저장
// 6 - 4 = 2, 2가 미리 저장했기에 여기서 멈춘다
//왜 한글은 끝에 글이 두번 나오는 걸까? 이상하네

// class question
let result = 0;
for (let i = 0; i <= 5; i++) {
  result += i;
}
console.log(result); //output 15 i from 0 to 5 01(0+0) 1(0+1) 2(1+2) 3(3+3) 4(6+4) 5(10+5

//12/30/2024
//1. Write a function isMultipleOf(a,b)
function isMultipleOf1(a, b) {
  return a % b === 0;
}
console.log(isMultipleOf1(15, 5)); //output true

//2. Write a function average1(arr)
function average1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(average1([10, 20, 30])); //output 20

//3. Write a function reverseArray2(arr)
function reverseArray2(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}
console.log(reverseArray2([1, 2, 3]));

//4. function areAllPositive(arr)
function areAllPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      // non positive first check i <=0 is treated as negative
      return false; // returns immediately
    }
  }
  return true;
}
console.log(areAllPositive([1, 2, 3, 4])); //output true
console.log(areAllPositive([1, -2, 3, 4])); //output false

//5. Write function countNumbers(arr) returns an object with the keys: even, odd, zero
function countNumbers(arr) {
  let even = 0;
  let oddCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      //not just falsy don't use arr[i] = 0
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      even++;
    } else {
      oddCount++;
    }
  }
  return {
    even: even,
    oddCount: oddCount,
    zeroCount: zeroCount,
  };
}
console.log(countNumbers([0, 2, 2, 3, 4, 5, 0, 6, 7, 8]));
//output { even: 5, oddCount: 3, zeroCount: 2 }

//6. Write a function countPosNegZero(arr) that returns an object with the keys: positive,
//negative, and zero
function countPosNegZero(arr) {
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    } else if (arr[i] < 0) {
      negCount++;
    } else {
      zeroCount++;
    }
  }
  return {
    posCount: posCount,
    negCount: negCount,
    zeroCount: zeroCount,
  };
}
console.log(countPosNegZero([0, -1, 2, -3, 4, 0, -5]));
//{ posCount: 2, negCount: 3, zeroCount: 2 }

//7. Write a function findMinAndMax(arr) that returns an object with the keys: min and max
function findMinAndMax(arr) {
  let min = arr[0]; //array 1st value starting
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; //update min if a smaller value found
    }
    if (arr[i] > max) {
      max = arr[i]; //update max if a larger value is found
    }
  }
  return { min, max };
}
console.log(findMinAndMax([3, 1, 4, 5, 9])); //output { min: 1, max: 9 }

//8. Write a function groupByParity(arr) objects with keys
function groupByParity(arr) {
  const result = { even: [], odd: [] };
  for (const num of arr) {
    //for of loop since we're using objects with keys not value
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }
  return result;
}
console.log(groupByParity([1, 2, 3, 4, 5, 6]));
//output { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }

//9. Write a function findMostFrequent that returns the element that appears most frequently in an array. Need to use frequncyMap
function findMostFrequent(arr) {
  let frequencyMap = {}; //to store the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequencyMap[element]) {
      //같은 숫자가 있으면 계속 센다 increment
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1; //같은 숫자가 없으면 1로 지정한다.
    }
  }
  //Find the element with the highest frequency
  let mostFrequentElement = 0; //null, nothing, it's a string, undefined=not defined yet
  // null = false, undefined = false, 0 = false, "" = false
  let maxFrequency = 0;
  for (let element in frequencyMap) {
    //이게 공식이다 to find the highest frequency
    if (frequencyMap[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequencyMap[element];
    }
  }
  return mostFrequentElement;
}
console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4])); //output 3

// function findMostFrequent (arr) {
//   let mostFrequentElement = null; //start with no element being the most frequent 끝에모음
//   let maxFrequency = 1; //start with a count of 1 for the first element
//   let currentFrequncy = 1; //initialize the current frequency as 1

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) { //loop thru the array to count consecutive identical ele
//       currentFrequncy++;
//     } else {
//       currentFrequncy = 1;
//     }
//     if (currentFrequncy > maxFrequency) { //update if current is higher than max
//       mostFrequentElement = arr[i];
//       maxFrequency = currentFrequncy;
//     }
//   }
//   return mostFrequentElement;
// }
// console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4])); //output 3

//10. Write a function findDuplicates that returns an array of elements that appear more than oonce.
function findDuplicates(arr) {
  let frequencyMap = {}; //object to store the frequency of each element
  let duplicates = []; //array to store duplicate elements
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  }
  for (let element in frequencyMap) {
    if (frequencyMap[element] > 1) {
      duplicates.push(element); //add to the duplicates array if the arr is greater than1
    }
  }
  return duplicates;
}
console.log(findDuplicates([1, 2, 2, 3, 3, 3, 4])); //output[2,3]

//1/11/2025

function getLowHigh(arr, target) {
  const low = []; //[]arrary -> list
  const high = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      low.push(arr[i]);
    } else {
      high.push(arr[i]);
    }
  }
  return { low, high };
}
console.log(getLowHigh([1, 2, 3, 4, 5, 6], 4)); //output { low: [ 1, 2, 3 ], high: [ 4, 5, 6 ] }

function sayMyName(schoolId) {
  const members = [
    { schoolId: 1, firstName: "Marco", lastName: "Seo", class: "QA" },
    { schoolId: 2, firstName: "Phil", lastName: "Lee", class: "QA" },
    {
      schoolId: 3,
      firstName: "Joshua",
      lastName: "Lee",
      class: "kids-coding",
    },
    { schoolId: 4, firstName: "Tae", lastName: "Cho", class: "QA" },
    { schoolId: 5, firstName: "In-chan", lastName: "Choi", class: "QA" },
  ];

  for (let i = 0; i < members.length; i++) {
    if (members[i].schoolId === schoolId) {
      const firstName = members[i].firstName;
      const lastName = members[i].lastName;
      return (
        "You are my favorite teacher, " + firstName + " " + lastName + "!!"
      );
    }
  }
}
console.log(sayMyName(1)); //output "You are Marco Seo"

//Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]
// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]
function number(arr) {
  numInt1 = [];
  numInt2 = [];

  for (let i = 0; i < arr.length; i++) {}
}

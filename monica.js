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
// function getAlphabeticIndex(letter) {
//   const alphabet = ["a", "b", "c", "d", "e"];
//   for (i = 0; i < alphabet.length; i++) {
//     if (alphabet[i] === letter) {
//       return i + 1;
//     }
//   }
//   return -1;
// }
// console.log(getAlphabeticIndex("a"));
// console.log(getAlphabeticIndex("dfd"));
// console.log(getAlphabeticIndex("d"));

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
// console.log(findDivisible([10, 15, 20, 25, 30], 3));

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

function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;
  arr.map((ele) => {
    if (ele % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  });
  return { even, odd };
}
console.log(countEvenOdd([1, 3, 4, 6, 5, 7, 9, 11]));

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

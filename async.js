// 11/14/2024

// (async() => {
//     const retrieveOrders = require('./async_example'); ---- returns promise
// // this is where you are going to write your code

// // retreiveOrders is an API call to get order details

//     const orderDetails = await retrieveOrders(true);
//     console.log(orderDetails);

// })();

// (async() =>
//     // {const retrieveOrders = require('./async_example');

// // this is where you are going to write your code

// // retreiveOrders is an API call to get order details

//     const orderDetails = await retrieveOrders(true);

//     console.log(orderDetails);
//     let total = 0;
// for (i = 0; i < orderDetails.length; i++) {
//     // console.log(orderDetails[i].orderID)
//     // console.log(orderDetails[i].totalAmount)
//     total = total + orderDetails[i].totalAmount
//     // console.log(total) --- 번호 하나 하나를 다 더해서 계산하는 것이다 틀렸다
// }
// // console.log(total)  ==== 여기는 합계를 내는 것이다
// })();

// for loop, print out order IDs
// using a for loop, print our sum of all the totalAmount

// (async() => {
//     const { retrieveOrders, getOrdersByStatus} = require('./async_example');

//     const orderDetails = await retrieveOrders(true);
//     const getOrderByStatus = await getOrdersByStatus (orderDetails, "Pending");
//     console.log(getOrderByStatus)
// const filteredOrders = await getOrdersByStatus(orderDetails, "No Good")
// console.log(filteredOrders)

// async function addTwoNumbers (num1, num2) {  === async 하고 await는 같이 간다 아님 둘다 지우고
//     return num1 + num2
// }
// const sum = await addTwoNumbers(2,4);

// getOrdersByStatus is a function that takes 2 arguments (const = filteredOrders or getOrdersByStatus)
// 내가 해야한다
// first is, orderDetails --> orderDetails (array of objects) 이거는 그냥 타이프하면 된다
// second is, the status --> string 이거는 ("")

// print out the results that you get from getOrderByStatus
// make sure to pass the 2 arguments into the function
// await를 넣지 않은 경우는 promise하는게 나온다

// })();

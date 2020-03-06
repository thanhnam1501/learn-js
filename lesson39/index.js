const axios = require('axios').default;
// const request = require('request');
// console.time("Time this");
// let res = request('https://randomuser.me/api/', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
// console.log(res.body);
// console.timeEnd("Time this");

let test1 = axios.get('https://jsonplaceholder.typicode.com/todos/1');
console.log(test1);
let test2 = axios.get('https://jsonplaceholder.typicode.com/todos/2');
console.log(test2);
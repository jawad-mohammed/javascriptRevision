####Promises
You can promises to handle Asynchronous operations in modern JS.
Once you crete a promise in JS it can either succeesd or fail -known as being resolved or rejected in JS terminology
Promises in JS in some way can also be compared to the promises we humans make
Just like human promises are driven by the futire implementation of a certain action, promises in JS are about the futire implementation if the code, resulting in either it beting resolved or rejected
There are 3 state of promise
Pending-When the final result of the promise is yet to be determined
Resolved-When the promise is successfully resloved
Rejected-When the promise is rejected
Once a promise is successfully resolved or rejected, you can use a .then() or catch() method on it
The .then() method is called when a promise is either resolved or rejected
It takes 2 callback functions as arguments
The first one is executed when the promise is resolved and the result is received and the second one is an optional argument is case the promise is rejected
The .catch() method is used as an error handler and is called when the promise is rejectedor has an error is execution
Lets discuss .then() and .catch()
let promise = new  Promise((resolve,reject)=>{
const i = "promise";
i==="Promise"?resolve():reject()
})
promise.then(()=>{
console.log("your promise is resolved")
})
.catch(()=>{
console.log("you promise is rejected")
})

####The Fetch API 
The fetch API allows us to make async requests to web servers from the browser.
It returns a promise everytime a request is made which is then furthur used to retrieve the response of the request
A basic fetch() takes one argument, the URL of the resourve you want to fetch
It then returns another promise thaht resolves with a Response object
This Response object is the representation of the HTTP response
So to get the JSON content from this promise you have to use the .json() method on the Response object.
This at last will return a promise that resolves with the result of the parsed JSON data from the response bpdy

fetch(`data end point`)
.then(res=>res.json())
.then(data=>setState(data))

####Async/Await
Async/Await functionality provides a better and cleaner way to deal with Promises.
JavaScript is synchronous in nature and async/await helps us to write promise-based functions in such a way as if they were synchronous by stopping the execution of furthur code until the promise is resolved or rejected
To make it work you have to use async keyword before declaring a function
async function promise(){}
Putting async before a function means that the function will always return a promise
Inside a async function you can use the keyword await to suspend furthur execution of code until that promise is resolved or rejected
You can use await only inside of an async function
async function example(){
let promise = new Promise(resolve =>{
resolve()
})
let response = await promise  //furthur execution will be stopped untillthe promise is resolved or rejected
let response = await promise 
}
####ES modules and Import/Export
Modules were introduces in JS in ES6. Each file is a module of its own.You can carry out objects,variables arrays, functions and so on from one file and use them in another.
This is referred to as importing and exporting modules
function Component(){
return(
<div>This is component</div>)
}
export default Component


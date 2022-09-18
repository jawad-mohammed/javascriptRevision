freecodecamp artice
https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/#:~:text=The%20Execution%20Context%20contains%20the,and%20the%20code%20gets%20executed.


### What is optional Chaning
Optional chaning(?.) allows to read value of a property which is located deep within a chain of connected objects without having to expressly validate that each refrence in the cahin is valid
The ?. operatir is like the chaning operator except that instead of causing and error if a reference is nullish (null or undefined) the expression short circuted with a return value of undefined
When used with function calls it returns undefined if the ginev function does not exists
What is function execution context
Whenever a function is invoked the JS engine creates a different type of Execution Context known as a Function Execution Context within the Global Execution Context to evaluate and execute the code within that function

All JS code needs to be hosted and run in some kind of environment.In most cases that environment would be a web  browser
For any piece of JS code to be executed in Web Browser a lot of processes take place behind the scenes
Different bits and pieces work together and topics discussed briefly
.Parser:
A Parser or Syntax Parser is a program that reads your code line-by-line.It understands how the code fits the syntax defined by the Programming Language and what it the code is expected to do so
JavaScript Engine:
Javascript Engine is simply a computer program that receives JS source code and compiles it to the binary instructions(machine code) that a CPU can understand
JS engines are typically developed by webbrowser vendoes and each major browser has one
eg V8 engine
#### How JS code gets executed
Well For those who doesn't know, the browser does'nt natively understand the highlevel JS code that we write in our applications.
It needs to be converted into a format that the browser and our computers can understand- machine code
While reading through the HTML if the browser encounters JS code to run via a <script></script> tag or an attribute that cointains JS code like onClik it sends it to its JS engine
Now, the browser's JS engine then creates a special environment to handle the transformation and execution of this JS code
The environment is known as the Execution Context
tHE BROWSER'S js engine then creates a special environment to handle the transformation and execution context of this JS code
This environment is knwon as the Executon Context
The Exection context contains the code that's currently running amd everytinh that aids in its execution

During the Execution Context run-time the specific code gets parsed by a parser the variables and functions are stored in memory executable byte-code gets generated and the code gets executed
There are two kinds of Execution Context in JS
Global Execution Context(GEC)
Function Execution Context (FEC)

Global Execution Context(GEC)
Whenever the JS engine receives a script file it first creates a default Execution Context know as the Global Executuion Context(GEC)

Well, the GEC is the base/default Execution Context where all JS code that is not inside of a function gets executed
For every JS file there can only be one GEC

Function Execution Context(FEC)
Whenever a function is called,the JS engine create a different type of Execution Context known as a Function Execution Context(FEC) within the GEC to evaluate and execute the code within that function 
Since every function call gets its own FEC there can be more than one FEC in the tun-time of a script

How are Execution Context created
Now that we are aware of  what execution context are and the fifferent types is availabel,let's look at how they are created
The creation of an Execution Context(GEC or FEC) happends in two phases
1)Creation Phase
2)Execution Phase

Creation Phse
In the creation phase the Execution Context is first asociated with an Execution Context Object(ECO) The Execution Context Object stores a lot of inportant data which the code in the Execution uses during its run-time
The creation phase occurs in 3 stages
during which the properties of the Execution Context Object are defined and set These stages are 
1) Creation of the Variable Object(VO)
2)Creation of the SCope Chain
3)Setting the value of the this keyword

Creation of the variable Object(VO)
The variable Object (VO) is an object-like-container created within and Execition Context.It stores the variable and function declaration defined within that Execution Context
In the GEC for each varai le declared with the var keyword a property is added to the VO that pointes to that variable and is set to 'undefined'.
Also, for every function declaration, a property is added to the VO,pointing to that function and that property is stored in memory.This means that all the function declation will be stored and made accessible inside and made accessible inside the VO, even before the code starts running
The FEC on the other hand does not construct a VO.Rather it generated am array-like object called the 'argument' object which includes all of the arguments supplied to the function
Learn more about the argyment object here 

The process of storing variables and function declaratiuon in memory prior to the exection of the code is known as Hoisting. Since this is an important concept lets discuss

Hoisting in JS 
Function and variable declarations are hoisted in JS.This means that they are stored in memory of the current Execution Context's VO and made available within the Execution Context even before the execution of the code begins

Function Hoisting.
In most scenarios when building an application,developers can choose to define functions at the top of a script, and only later call them down the code
  
function myAge(dob){
console.log(new Date.getFullYear() - dob)
}
myAge(1995)

However due to hoising the opposite will still work.Where we can call functions first then define them later down the script

In the code above the myAge function declaration will be stored in the memory of VO making it availabe for use even before it is defined.

Variable Hoisting:
Variable initialized with the var keyword are stored in the memory of the current Execution Context's VO as a property
and initialized with the value undefined.
This means unlike functions trying to access the value ofg the variable before it is defined will result in undefined.

console.log(myName)       
var myName = "john doe"
//undefined

Ground Rules of Hoisting
Hoisting only works for function declaration, not expresstion.Here is an example of a function exptesstion where the code execution will break
The code execution breaks because with function expresson, 

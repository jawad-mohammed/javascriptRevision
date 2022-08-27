// display the current day and time
function displayTime(){
let time = new Date().toDateString() 
console.log(time);
}
displayTime()

// area of a triangle where lengths of the three of its sides are 5, 6, 7.
function areaOfTriangle (a,b,c){
if(a===b && b===c && c===a){
    console.log(`all areas are equal`);
}else{
    console.log(`its not equal`);
}
return a+b+c
    
}
areaOfTriangle(2,1,2)

// multiplication and division of two numbers
function mul(n1,n2){
return n1*n2
}
console.log(mul(2,3));
mul(2,3)

function div(n1,n2){
return n1/n2
}
console.log(div(4,2));

// compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
function computeTwoInt(n1,n2){
if(n1===n2){
   let sum = n1+n2
     return sum*3
}
}
console.log(computeTwoInt(2,2));


// to check two given numbers and return true 
// if one of the number is 50 or if their sum is 50.

function checkIf50(n1,n2){
if(n1===50 || n2===50 ){
    console.log(`its 50`)
}else if(n1+n2===50){
console.log(`its 50 again`)
}
}
checkIf50(25,25)

// to check from two given integers,
// whether one is positive and another one is negative
function checkInt(n1,n2){

    if(n1 >= 0 || n2>=0){
console.log(`its positive value`);
}
else if(n1<=0 || n2<=0){
console.log(`its negative value`);
}
}
checkInt(-1,+2)

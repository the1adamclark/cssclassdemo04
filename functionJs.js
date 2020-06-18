'use strict'

console.log("this file is connected.")

// function functionName (){
//     //code here
//     console.log('this is from the functions');

// }
// functionName();

// parameters are variables we pull from code = allow us to give things in our code a human readable values we can
//use throughougt the code

// function multiply(num1, num2){
//     console.log(num1);
//     var answer = num1 *num2;
//     return answer;
// }


// multiply(2, 3);


// function circleProps(radius){
//     var area = Math.PI * radius * radius;
//     var circumference = 2 * Math.PI * radius;
//     var props = [area, circumference];

//     return props;

// }
// var circle1 = circleProps(3);

// console.log(circle1);

//anonomous function
// this is a function expression

// var circleProps = function(radius){
//      var area = Math.PI * radius * radius;
//      var circumference = 2 * Math.PI * radius;
//      var props = [area, circumference];

//     return props;
// }
// var getCircle = circleProps(3);
// console.log(getCircle);


//immediate invoked function
var checkLogin = (function() {
    var userID;
    if (user)
}


//scope
var globalVar = 'universal';

function scoper(param){
    var localVar = 'I like my privacy';
    console.log('inside the function we can see the param =' + param);
    console.log('we can see the localVar' + localVar);
    console.log('we can see the global var' + globalVar);

    for(var i = 0; i <3; i++){

    }

    console.log('can we see the i outside the loop' + i);
}
scoper('argument');
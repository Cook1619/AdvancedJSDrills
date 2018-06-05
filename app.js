name = 'Matt';
var name;
console.log(name);
 setName();
function setName(){
    console.log(name);
}
let findAvg = avg(3,4);
console.log(findAvg);
function avg(num1, num2){
    console.log('random text');
    var answer = (num1 + num2)  / 2;
    return answer;
}
console.log(findAvg);

let fruits = ['apples','bananas','oranges'];
let leastFav = fruits[2];

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        console.log(leastFav);
    }
}

printFruits();
printFavFruit();

sayName();
function sayName(){
    console.log('Hello, Matt');
}
saySomething();
var saySomething  = function() {
    console.log("More random text");
}
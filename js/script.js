console.log('linked');

//functions are small programs
//enables easy debuggin
//enables teamwork with modular programming techniques

//a function must be defined and called, as per the reqirements
//function names are written meaningfully with camelcase
//normally used for a single purpose

//function definition

function displayInfo(){
  document.getElementById('result').innerHTML = 'Learning JS functions</br></br>';
}
//calling the function
displayInfo();

//passing parameter or value inside the function
//'name' here is a dummy variable/parameter/argument
function greetMe(name){
  document.getElementById('result').innerHTML += 'Hi ' + name + ', good afternoon </br>'
}
greetMe('Chris');//actual argument or parameter
greetMe('Yoobee');

//gt is a local variable has a local scope, only available inside the function
function totalExpense(f, t, b){
  var gt = f + t + b;
  return gt; //returns the value to the location where the function is called from
}

var food = 100;
var transport = 125;
var bills = 255;

var grandTotal = totalExpense(food, transport, bills);//paramters shoul corispond in order and type of data

document.getElementById('result').innerHTML += 'the total expense is ' + grandTotal;


document.getElementById('result').innerHTML += '</br> the average is' + (totalExpense(50,35,40)/3).toFixed(2);

// variable total has global scope, able to use inside and outside the function
var total = 345;
function averageExpenseTotal(total){
  var myAverage = (total/3);
  console.log(myAverage);
  return myAverage;
}
document.getElementById('result').innerHTML += '</br> the average of the new function is ' + averageExpenseTotal(total);


var myAverage = 200;//global
console.log(myAverage);

//this variable below (myAverage) is able to run seperately from the other variables with the same name because is it // NOTE: not global. Since it is stored inside a seperate function, it is considered local
function anotherFuction(){
  var myAverage = 0;
  console.log(myAverage);
}

anotherFuction();






//5 times table function

document.getElementById('tables').addEventListener('click',function(){
  for(var i=0; i<21; i++){
  var mult = 5*i;
  document.getElementById('multiplication').innerHTML += '</br> 5x' + i + '=' +mult;
}//loop
})//event listener

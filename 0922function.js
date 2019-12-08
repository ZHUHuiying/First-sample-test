/*function addNum(a,b){
	console.log('addNum is called');
	return a+b}

//console.log(addNum(2,3))

var v1 = function(a,b){
	console.log('anonymous funtion is called');
	return a+b}

v1(5,6)

//setTimeout(function(){console.log('funtion in setTimeout is called')}, 3000)
setTimeout(addNum(2,3), 3000)

// constructor function
var v2 = new Function("a", "b", "console.log('constructor function is called'); return a+b ;")
console.log(v2(6,7))

// self invoking function
(function(a) {return a*a;})(2);*/


var add = (function(){
	var count = 0;
	return function(){return count += 1;}
	})();



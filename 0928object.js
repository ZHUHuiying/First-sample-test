/* function createPeople(){              // class
	person = new Object();
	person.name = "jana";
	person['age'] = 90;
	return person;	
}

var v1 = createPeople();
v1.age = 18;
//alert (typeof(createPeople) ": createPeople");
//console.log(v1.name + v1.age);


function Person(){
this.name = 'thisname';
this.age = 19;
this.designation = 'Teacher';}

//alert (typeof(Person) + ': Person')
var v2 = new Person(); */

var Animal = {type : "anytype",
		method : function(){alert ("methond is called, type is " + this.type)}}

var fish = Animal;
fish.type = "Fishes";
fish.method();

var Teacher = {name : "gina",
               age : 90,
               hobby : "singing",
	       smoking: "no"}
var prop = "";
for (p in Teacher){

prop += p + " : " ; }
console.log(prop)


delete Teacher.name
var prop = "";
for (p in Teacher){

prop += p + " : " ; }
console.log(prop);

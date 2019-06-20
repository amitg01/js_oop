/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	// add code here
var person = {};
person.name = name;
person.age = age;

return person;
}

var vicky = makePerson('Vicky', 24);

console.log(vicky.name);
console.log(vicky.age);
// /********* Uncomment these lines to test your work! *********/
// ; // -> Logs 'Vicky'
//  // -> Logs 24




/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
	// add code here
greet(){
  console.log("hello");
  }
};

personStore.greet();
// /********* Uncomment this line to test your work! *********/
//  // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
	// add code here
  var user = Object.create(personStore);
  user.name = name;
  user.age = age;

  return user;
}

var sandra = personFromPersonStore('Sandra', 26);

console.log(sandra.name)
sandra.greet();
// /********* Uncomment these lines to test your work! *********/
// ; // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// 
 //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
personStore.introduce = function(){
 return (console.log(`Hi, my name is ${this.name}`));
}
// add code here
sandra.introduce();
//  // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
	// add code here
  this.greet = function(){
    console.log("hello");
  }
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
//  // -> Logs 'hello'
simon.greet();


/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	// add code here


}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here


// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor() {
    // add code here


	}

	// add code here

}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// add code here


// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore /* Put code here */ ;

function adminFactory(name, score) {
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

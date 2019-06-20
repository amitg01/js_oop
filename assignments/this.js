// [ ] Using function to create object

var createUser = function(name,id,password,noOfProject){
    var user = {
        getUsername,
        getPassword,
        getProjects,
        changeUsername,
        changePassword,
        incrementProject,
        decrementProject
    
    }
        user.username = name;
        user.password = password;
        user.projects = noOfProject;

    return user;
}


var getUsername = function(){
    return this.username;
}

var getPassword = function(){
    return this.password;
}

var getProjects = function(){
    return this.projects;
}

var changeUsername = function(newUsername){
    var oldUsername = this.username;
    this.username = newUsername;
    return oldUsername;
}

var changePassword = function(newPassword){
    var oldPassword = this.password;
    this.password = newPassword;
    return oldPassword;
}

var incrementProject = function(){
    return (++(this.projects));
}

var decrementProject = function(){
    return (--(this.projects));
}

var amit = createUser("amit",123,"abcd",10)

console.log(amit.getUsername());



// [ ] Using Object.create

var methods = {

    getUsername(){
        return this.username;
    },
    
     getPassword(){
         return this.password;
     },
    
      getProjects(){
         return this.projects;
     },
    
     changeUsername(newUsername){
        var oldUsername = this.username;
        this.username = newUsername;
        return oldUsername;
     },
    
      changePassword(newPassword){
        var oldPassword = this.password;
        this.password = newPassword;
        return oldPassword;
     },
    
     incrementProject(){
         return (++(this.projects));
     },
    
    decrementProject(){
         return (--(this.projects));
     }
}

var createUser = function(name,id,password,noOfProject){
    var user = Object.create(methods);
        user.username = name;
        user.password = password;
        user.projects = noOfProject;

    return user;
}

var amit = createUser("amit",123,"abcd",10)

console.log(amit.getUsername());



// [ ] Using Pseudoclassical Way

var createUser = function(username,id,password,noOfProject){
    var user = Object.create(createUser.prototype);
    user.username = username;
    user.password = password;
    user.projects = noOfProject;

return user;
}

createUser.prototype.getUsername = function(){
    return this.username;
}

createUser.prototype. getPassword = function(){
    return this.password;
}

createUser.prototype.getProjects = function(){
    return this.projects;
}

createUser.prototype.changeUsername = function(newUsername){
    var oldUsername = this.username;
    this.username = newUsername;
    return oldUsername;
}

createUser.prototype.changePassword = function(newPassword){
    var oldPassword = this.password;
    this.password = newPassword;
    return oldPassword;
}

createUser.prototype.incrementProject = function(){
    return (++(this.projects));
}

createUser.prototype.decrementProject = function(){
    return (--(this.projects));
}

var amit = new createUser("amit",123,"abc",20);

console.log(amit.changeUsername("amitg"))
console.log(amit.getUsername())

// [ ] Using Class

class CreateUser{
    constructor(username,id,password,noOfProject){
        this.username = username;
        this.id = id;
        this.password = password;
        this.projects = noOfProject;
    }

    
    getUsername(){
        return this.username;
    }
    
     getPassword(){
         return this.password;
     }
    
      getProjects(){
         return this.projects;
     }
    
     changeUsername(newUsername){
        var oldUsername = this.username;
        this.username = newUsername;
        return oldUsername;
     }
    
      changePassword(newPassword){
        var oldPassword = this.password;
        this.password = newPassword;
        return oldPassword;
     }
    
     incrementProject(){
         return (++(this.projects));
     }
    
    decrementProject(){
         return (--(this.projects));
     }

}

var amit = new CreateUser("amit",123,"abcd",25)
console.log(amit.incrementProject())

console.log(this.document === document); // Output

console.log(this === window); //Output

var myFunction = function() {
  console.log(this);
};
myFunction(); // Output

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); //Output

function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //Output ??
console.log(this === window)(
  // Output

  // This for IIFE
  function() {
    console.log("Anonymous function invocation");
    console.log(this === window);
  }
)(); //Output

// This for IIFE in strict mode
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); // Output

var myObject = {};
myObject.someMethod = function() {
  console.log(this);
};
myObject.someMethod(); //Value Of This

// This refers to the New Instance

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output

//This refers to the invoker Object
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === window);
  }
};

user.foo(); // Output
let fun1 = user.foo1;
fun1(); // Output ??
user.foo1(); // Output ??

//this will call apply and bind

this.x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // Output ??

var retrieveX = module.getX;
retrieveX(); //Output ??

var boundGetX = retrieveX.bind(module);
boundGetX(); // Output ??

// Call with new constructor

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output

person.displayName.call(person2); // Output ??

// Guess the output of the following

const a = {
  a: "a"
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  }
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis();

// Output
obj.getThis.call(a);

// Output
obj.getThis2();

// Output
obj.getThis2.call(a);

// Output
obj.getThis3();

// Output
obj.getThis3.call(a);

// Output
obj.getThis4();

// Output
obj.getThis4.call(a);


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
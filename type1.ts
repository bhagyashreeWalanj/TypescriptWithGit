let message ="hello world";
console.debug(message);

class greeting {
    constructor(parameters) {
        console.log("Good Morning ..."+parameters);
    }
}

class day{
    greetDay(){
        console.log("Good Morning ...Mumbai");
    }
}

var data = "bhagya";
console.log(data);

let greet = new greeting("Bhagyashree");
let obj = new day();
obj.greetDay();

let data1 = "data";
let data3 = data1;

console.log(data3);

class User {
    name : string
    age : number
    gender : string

    createUser(userr : User){
        
    }
}

let user = new User();
user.name = 'Dhiraj';
user.gender = 'Male';
user.age = 23;
user.createUser(user);





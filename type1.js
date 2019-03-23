var message = "hello world";
console.debug(message);
var greeting = /** @class */ (function () {
    function greeting(parameters) {
        console.log("Good Morning ..." + parameters);
    }
    return greeting;
}());
var day = /** @class */ (function () {
    function day() {
    }
    day.prototype.greetDay = function () {
        console.log("Good Morning ...Mumbai");
    };
    return day;
}());
var data = "bhagya";
console.log(data);
var greet = new greeting("Bhagyashree");
var obj = new day();
obj.greetDay();
var data1 = "data";
var data3 = data1;
console.log(data3);
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.createUser = function (userr) {
    };
    return User;
}());
var user = new User();
user.name = 'Dhiraj';
user.gender = 'Male';
user.age = 23;
user.createUser(user);

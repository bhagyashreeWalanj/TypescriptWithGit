// with typed parameters
function sum(num1: number,  num2: number): number{
    return num1+num2;
}
let value=  sum(5,3);
console.log("result-------->"+value);

//-----------------------------------------------------
// return string 
function sum1(num1,  num2): string{
    return num1+num2;
}
let value1=  sum1('5',3);
console.log("result1-------->"+value1);

//-----------------------------------------------------
// 'any' type of parameters
function sum2(num1,  num2){
    return num1+num2;
}
let value2=  sum2(5,3);
console.log("result2-------->"+value2);
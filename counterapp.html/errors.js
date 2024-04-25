//error handling in javascript
//an error is a faulty piece of code that prevents the code from being executed further
/*types of errors include
*syntax errors
*type errors 
*reference errors*/

//try catch blocks
console.log(a+b);


try{
    console.log(a+b)
}catch(err){
    console.log("there was an error")
    console.log("the error was saves in the error log")
}
console.log("This line is  reached");
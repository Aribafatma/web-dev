function isLegal( name , age){
    if(age >= 18){
        console.log(name + "is allowed to vote");

    }
    else{
        console.log(name + "is not allowed to vote");
    }
}
var userName1 ="harry"
var password1 = "123randin"
var age1 = 16

var userName2 = "ARIBA FATMA"
var password2 = "ariba is cool"
var age2 = 35
isLegal(userName1,age1)
isLegal(userName2, age2)

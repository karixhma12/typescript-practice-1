
function isLegal(user:User):boolean{
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}

interface User{
    firstName : string;
    lastName : string;
    email : string;
    age : number;
}

const user:User = {
    firstName : "karishma",
    lastName : "kasilingam",
    email : "karishma.7022@gmail.com",
    age : 25
}

console.log(isLegal(user));
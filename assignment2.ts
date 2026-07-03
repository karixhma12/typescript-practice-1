/*type StringOrNumber = string | number;

function printId(id:StringOrNumber):void{
    console.log(`ID : ${id}`);
}

printId(123);
printId("karish");*/

/*type Employee = {
    name : string,
    startDate : Date
}

type Manager = {
    name : string,
    department : string
}

type TeamLead = Manager & Employee;

const teamLead : TeamLead = {
    name : "Karishma",
    startDate : new Date(),
    department : "Product"
}

console.log(teamLead);*/

/*function maxValue(a:number[]):number{
    let maxNumber:number = 0;
    for(let i:number=0 ; i<a.length ; i++){
        if(maxNumber<a[i]!){
            maxNumber = a[i]!;
        }
    }
    return maxNumber;
}

console.log(maxValue([1,2,3,4,5]));*/

interface User{
    firstName : string,
    lastName : string,
    age : number
}

function filteredUsers(user:User[]):User[]{
    let newUsers:User[] = user.filter(u=>{
        return u.age>=18;
    })

    return newUsers;
}

const user = [
    {
        firstName:"Karishma",
        lastName:"K",
        age : 25
    },
    {
        firstName:"Theju",
        lastName:"K",
        age : 22
    },
    {
        firstName:"Vimala",
        lastName:"K",
        age : 55
    }
]

console.log(filteredUsers(user));
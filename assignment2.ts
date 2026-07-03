/*type StringOrNumber = string | number;

function printId(id:StringOrNumber):void{
    console.log(`ID : ${id}`);
}

printId(123);
printId("karish");*/

type Employee = {
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

console.log(teamLead);
"use strict";
/*type StringOrNumber = string | number;

function printId(id:StringOrNumber):void{
    console.log(`ID : ${id}`);
}

printId(123);
printId("karish");*/
Object.defineProperty(exports, "__esModule", { value: true });
function filteredUsers(user) {
    let newUsers = user.filter(u => {
        return u.age >= 18;
    });
    return newUsers;
}
const user = [
    {
        firstName: "Karishma",
        lastName: "K",
        age: 25
    },
    {
        firstName: "Theju",
        lastName: "K",
        age: 22
    },
    {
        firstName: "Vimala",
        lastName: "K",
        age: 55
    }
];
console.log(filteredUsers(user));
//# sourceMappingURL=assignment2.js.map
/*function getFirstElement <T>(names:T[]):T{
    return names[0]!;
}

let result:string = getFirstElement(["Harkirat","Raman"]).toLowerCase();
console.log(result);

let resultNum:string = getFirstElement([1,2,3]).toFixed(2);
console.log(resultNum);*/

function getLastElement <T>(array:T[]):T{
    return array[array.length-1]!;
}

console.log(getLastElement([1,2,3,4]));
console.log(getLastElement(["k","dcvu","dfhuv"]));
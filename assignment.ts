interface Person{
    name : string;
    age : number;
    greet(phrase:string) : void;
}

class Manager implements Person{
    name : string;
    age : number;
    teamSize:number;

    constructor(n:string,a:number,size:number){
        this.name = n;
        this.age = a;
        this.teamSize = size;
    }

    greet(phrase:string):void{
        console.log(`${phrase} ${this.name}, manager of ${this.teamSize} people`);
    }
}

const manager = new Manager("Karishma",25,1000);
manager.greet("Hello");
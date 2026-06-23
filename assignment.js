"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    teamSize;
    constructor(n, a, size) {
        this.name = n;
        this.age = a;
        this.teamSize = size;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}, manager of ${this.teamSize} people`);
    }
}
const manager = new Manager("Karishma", 25, 1000);
manager.greet("Hello");
//# sourceMappingURL=assignment.js.map
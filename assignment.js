"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const user = {
    firstName: "karishma",
    lastName: "kasilingam",
    email: "karishma.7022@gmail.com",
    age: 25
};
console.log(isLegal(user));
//# sourceMappingURL=assignment.js.map
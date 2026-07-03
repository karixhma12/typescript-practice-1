"use strict";
/*enum Direction {
    up="UP",
    down="DOWN",
    left="LEFT",
    right="RIGHT"
}

function doSomething(keyPressed:Direction):void{
    console.log(keyPressed);
}

doSomething(Direction.up);
doSomething(Direction.left);*/
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 400] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
function getStatusMessage(status) {
    switch (status) {
        case ResponseStatus.Success:
            return "Successful!";
        case ResponseStatus.NotFound:
            return "It is not found!";
        case ResponseStatus.Error:
            return "There is an error!";
        default:
            return "Invalid";
    }
}
console.log(getStatusMessage(ResponseStatus.Success));
//# sourceMappingURL=assignment3.js.map
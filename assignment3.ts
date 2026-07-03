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

enum ResponseStatus{
    Success=200,
    NotFound=400,
    Error=500
}

function getStatusMessage(status:ResponseStatus):string{
    switch(status){
        case ResponseStatus.Success : 
            return "Successful!";

        case ResponseStatus.NotFound : 
            return "It is not found!";
         
        case ResponseStatus.Error : 
            return "There is an error!";
        
        default:
            return "Invalid";    
    }
}

console.log(getStatusMessage(ResponseStatus.Success));


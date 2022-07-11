let userInput: unknown;
let userName:string;


//type never (Return value)

function generateError(message: string,code:number):never{
    throw {message:message,errCode:code};
}

generateError("An error occurred!",500);
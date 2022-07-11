"use strict";
let userInput;
let userName;
//type never (Return value)
function generateError(message, code) {
    throw { message: message, errCode: code };
}
generateError("An error occurred!", 500);
//# sourceMappingURL=never.js.map
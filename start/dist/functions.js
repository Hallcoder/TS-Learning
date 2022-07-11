"use strict";
function ADDING(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("Result " + num);
}
function ADDINGAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult1(ADDING(12, 34));
let combineValues;
combineValues = ADDING;
// combineValues = printResult;
console.log(combineValues(5, 6));
ADDINGAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map
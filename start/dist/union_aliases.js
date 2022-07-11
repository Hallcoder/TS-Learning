"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    // if(resultConversion === 'as-number'){
    //     return +result;
    // }
    return result;
}
const combinedAges1 = combine(30, 26, "as-number");
console.log(combinedAges1);
const combinedAges3 = combine("30", "26", "as-number");
console.log(combinedAges3);
const combinedAges2 = combine("Max", "Anna", "as-text");
console.log(combinedAges2);
// add(number1,number2,printResult,resultPhrase);
//# sourceMappingURL=union_aliases.js.map
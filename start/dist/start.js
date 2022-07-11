"use strict";
const button = document.createElement('button');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
console.log(input1.value);
function Adding(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(Adding(+input1.value, +input2.value));
});
//# sourceMappingURL=start.js.map
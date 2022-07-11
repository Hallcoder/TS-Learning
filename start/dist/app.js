"use strict";
const names = ['Max', 'Manuel'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
//generic function
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Max' }, { age: 15 }));
const mergedObj = merge({ name: 'Max' }, { age: 15 });
mergedObj.age;
//# sourceMappingURL=app.js.map
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
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['sports', 'ged']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'jane' }, 'name');
//generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Max' });
objStorage.addItem({ name: 'Manu' });
objStorage.removeItem({ name: 'Max' });
console.log(objStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namez = ['Max', 'Max'];
//# sourceMappingURL=allAboutGenerics.js.map
"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['eating', 'movies'],
    role: Role.ADMIN
};
// const person : {
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number,string]
// } = {
//     name:"Maximilian",
//     age:30,
//     hobbies:['eating','movies'],
//     role:[2,'author']
// }
// person.role.push('admin');
// person.role = [3,"Sdf","dfs"];
let favoriteActivites;
favoriteActivites = ['Dp'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map() Error
}
//# sourceMappingURL=obj-enums-arrays-tuple.js.map
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['eating', 'movies']
};
var favoriteActivites;
favoriteActivites = ['Dp'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}

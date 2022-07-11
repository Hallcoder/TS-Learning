const names: Array<string> = ['Max','Manuel'];

const promise:Promise<string> = new Promise((resolve, reject) =>{
setTimeout(() =>{
resolve('This is done');
},2000)
});

//generic function

function merge<T extends {}, U>(objA:T, objB:U){
    return Object.assign(objA, objB);
}

console.log(merge({name:'Max'},{age:15}));
const mergedObj = merge({name:'Max'},{age:15})
mergedObj.age;
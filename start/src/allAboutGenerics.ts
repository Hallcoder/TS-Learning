const names: Array<string> = ['Max','Manuel'];
const promise:Promise<string> = new Promise((resolve, reject) =>{
setTimeout(() =>{
resolve('This is done');
},2000)
});

//generic function

function merge<T extends {}, U extends {}>(objA:T, objB:U){
    return Object.assign(objA, objB);
}

console.log(merge({name:'Max'},{age:15}));
const mergedObj = merge({name:'Max'},{age:15})
mergedObj.age;

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element:T) : [T,string]{
    let descriptionText = 'Got no value.';
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    }else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element,descriptionText];
}
console.log(countAndDescribe(['sports','ged']))

function extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U){
  return 'Value: ' + obj[key];
}

extractAndConvert({name:'jane'},'name');
//generic classes
class DataStorage<T extends string | boolean | number | object>{
    private data:T[] = [];
    
    addItem(item:T){
        this.data.push(item);
    }
    
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems())
const boolStorage = new DataStorage();
boolStorage.addItem(false);
const objStorage  = new DataStorage<object>();

objStorage.addItem({name:'Max'})
objStorage.addItem({name:'Manu'})
objStorage.removeItem({name:'Max'})

console.log(objStorage.getItems());


//generic utility types: Partial:make an object's properties optional and Readonly: the name implies the meaning.

interface CourseGoal{
    title:string,
    description:string,
    completeUntil:Date
}

function createCourseGoal(title:string, description:string, date:Date):CourseGoal{
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return <CourseGoal>courseGoal;
}

 const namez:Readonly<string[]> =['Max','Max'];
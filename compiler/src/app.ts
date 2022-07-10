interface Person {
     name:string;
    age:number;
    
    greet(phrase:string):void;
}

let user1:Person;

user1 = {name: "John", age:1, greet(name:string){
    console.log(`Hi there -I am ${name}`)
}
};
user1.greet("John");
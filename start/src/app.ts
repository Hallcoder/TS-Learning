//decorator is a function you apply to an object in a certain way
//decorators take parameters , for class it takes one which is target
//decorator factories help us configure what our decorators do and how they behave
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (originalConstructor: any): any{
    console.log("rendering template");
    console.log(originalConstructor);
   // return class to replace original one to add more functionality
    return class extends originalConstructor{
        constructor() {
           super();
           const hookEl = document.getElementById(hookId);
           if (hookEl) {
             hookEl.innerHTML = template;
           }
        }
    }
  };
}

@Logger("Logging - person")
@WithTemplate("<h1>My Person object</h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

const per = new Person();
console.log(per);

// ---
function Log(target:any, propertyName:string | Symbol){
  console.log('Property decorator!');
  console.log(target," ",propertyName);
  
  
}
//accessor decorator
function Log2(target: any, name:string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
//method decorator
function Log3(target:any, name:string | Symbol, descriptor:PropertyDescriptor){
    console.log('method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);

}
//parameter decorator
function Log4(target:any, name:string | Symbol, position:number){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;
  @Log2
  set price(val:number){
   if(val >0)  this._price = val;
   else throw new Error("use a positive value")
  }
  constructor(t: string, p:number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 * tax);
  }
}

const p1 = new Product('Book1',21)
const p2 = new Product('Book1',21)
//application of decorators in auto binding instead of manually doing the job of binding
function AutoBind(_: any, _2:string, descriptor: PropertyDescriptor){
 const originalMethod = descriptor.value;
 const adjDescriptor: PropertyDescriptor = {
    configurable:true,
    enumerable:true,
    get() {
        const boundFunction  = originalMethod.bind(this);
        return boundFunction;
    }
}
return adjDescriptor;
}

class Printer {
    message = 'This works!';
    @AutoBind
    showMessage(){
        console.log(this.message)
    }
}

const p = new Printer();
const Button = document.querySelector('button')!;
Button.addEventListener('click', p.showMessage)

interface ValidatorConfig{
  [property:string]: {
    [validatableProp:string]:string[] //['required','positive']
  }
}
const registeredValidators: ValidatorConfig = {};

function Required(target:any, propName: string){
  registeredValidators[target.constructor.name] = {
    [propName]:['required']
  }
}

function PositiveNumber(target:any, propName: string){
  registeredValidators[target.constructor.name] = {
    [propName]:['positive']
  }
}

function validate(obj:any):Boolean{
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if(!objValidatorConfig){
    return true
  }
  for(const prop in objValidatorConfig){
    for(const validator of objValidatorConfig[prop]){
      switch(validator){
        case 'required':
          return !!obj[prop];
      }
    }
  }
  return true
}

class Course {
    @Required
    title:string;
    @PositiveNumber 
    price:number;
    constructor(t:string,p:number){
        this.title = t;
        this.price = p;
    }
}

const form = document.querySelector('form')!;
form.addEventListener('submit',(e:any) => {
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;
    const title = titleEl.value;
    const price = +priceEl.value;
    
    if(!validate())
    const createdCourse = new Course(title,price);
    console.log(createdCourse)
})
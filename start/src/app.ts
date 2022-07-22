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
  return function (_: Function) {
    console.log("rendering template");
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
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
function Log3(target:any, name:string | Symbol, descriptor:any){
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

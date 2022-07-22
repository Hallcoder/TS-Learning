//decorator is a function you apply to an object in a certain way
//decorators take parameters , for class it takes one which is target
//decorator factories help us configure what our decorators do and how they behave
function Logger(logString:string){
    return function(constructor:Function){
       console.log(logString);
       console.log(constructor);
       
       
    }
   }
   
   function WithTemplate(template:string,hookId:string){
       return function(_:Function){
           console.log('rendering template');
           const hookEl = document.getElementById(hookId);
           if(hookEl){
               hookEl.innerHTML = template;
           }
       }
   }
   
   @Logger('Logging - person')
   @WithTemplate('<h1>My Person object</h1>','app')
   class Person{
       name ='Max';
   
       constructor(){
           console.log('Creating person object...')
       }
   }
   
   const per = new Person();
   
   console.log(per);
   
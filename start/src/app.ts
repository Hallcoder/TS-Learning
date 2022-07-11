type Admin = {
    name:string,
    privileges:string[]
};

type Employee = {
    name:string,
    startDate:Date
};
console.log('inside app ts')
type ElevatedEmployee = Admin & Employee;

const e1:ElevatedEmployee ={
    name:'sd',
    privileges:["delete"],
    startDate:new Date()
}

type combinable = number | string;
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:combinable,b:combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString()  + b.toString();
    }
    return  a + b;
}
const result = add('Max','Schwarz');
result.split(' ')
// type UnknownEmployee = Admin | Employee;

// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log('Name', emp);
//     if('privileges' in emp){
//         console.log('Privileges',emp.privileges);
//     }
//     if('startDate' in emp) 
//        console.log('Start Date', emp.startDate);
// }
// printEmployeeInformation(e1);

// class Car{
//     drive(){
//         console.log('Driving...')
//     }
//     loadCargo(amount:number){
//         console.log('Loading cargo',amount);
//     }
// }
// class Truck{
//     drive(){
//         console.log('Driving a truck...')
//     }
//     loadCargo(amount:number){
//         console.log('Loading cargo',amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck)
//       vehicle.loadCargo(1000);
// }
// useVehicle(v1);

// interface Bird{
//     type:'bird';
//     flyingSpeed:number;
// }

// interface Horse {
//     type:'horse';
//     runningSpeed:number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
//      switch(animal.type){
//         case 'bird':
//           speed = animal.flyingSpeed
//         break;
//         case 'horse':
//           speed = animal.runningSpeed
//      }
//      console.log('Moving at speed: ', speed);
// }

// moveAnimal({type:'bird',flyingSpeed:120});

// // let userinput =<HTMLInputElement>document.getElementById('inputEl')!;
// let userinput =document.getElementById('inputEl')! as HTMLInputElement;
// userinput.value = 'bird';

// interface ErrorContainer{
//     //{email:'Not a valid email', username:'Must start with a character'}
//     [key: string]:string;
// }

// const errBag: ErrorContainer =  {
//     email: 'Not a valid email',
//     username: 'Must start with a character'
// };


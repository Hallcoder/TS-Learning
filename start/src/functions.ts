function ADDING(n1:number,n2:number) {
    return n1+n2;
}

function printResult1(num:number){
    console.log("Result " + num);
}
function ADDINGAndHandle(n1:number,n2:number,cb:(num:number)=>void){
    const result = n1+n2;
    cb(result)
}
printResult1(ADDING(12,34));

let combineValues : (n1:number,n2:number) => number;
combineValues = ADDING;
// combineValues = printResult;
console.log(combineValues(5,6));
ADDINGAndHandle(10,20,(result)=>{
    console.log(result);
})
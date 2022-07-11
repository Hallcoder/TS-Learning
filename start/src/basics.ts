function Add(n1:number,n2:number,showResult:boolean,phrase:String){
    const result = n1+n2;
    if(showResult){
         console.log(`${phrase}`,result);
    }else{
        return result;
    }
}
const number1 = 5;
const number2 = 2;
const printResult  = true;
const resultPhrase =  'The result is'

Add(number1,number2,printResult,resultPhrase);
import { read } from "./console";

let arrayGenerator = function():number[]{
    var newArray:number[]=[];

    for (var i=0; i<10; i++){
            newArray.push(Math.random());
    }
    
    return newArray;
}

let arraySum = function (newArray:number[]):number{
    var elementSum = 0;

    for ( var i=1; i<10  ; i++){
          elementSum += newArray[i];
      }
 
     return elementSum;
 
}

async function main(): Promise<void>
{
    //ar genArr=

    for (var i=1; i<=10; i++){
       var massive =arrayGenerator(); 
       console.log('Массив #',i); 
       console.log(massive);
       console.log('Сумма элементов массива');
       console.log(arraySum(massive));
       
    }
        
}

main();
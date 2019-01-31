import { read } from "./console";
import { get } from "https";

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
    var arrayCounter:number[]=[];
    var sumCompare:number[]=[];
    function getMaxOfArray(numArray):number {
        return Math.max.apply(null, numArray);
    }


    for (var i=1; i<=10; i++){
       var arr =arrayGenerator(); 
       console.log('Массив #',i); 
       console.log(arr);
       console.log('Сумма элементов массива');
       console.log(arraySum(arr));
       arrayCounter.push(i); 
       sumCompare.push(arraySum(arr))      
    }
    
    console.log('***')
    console.log(arrayCounter);
    console.log(sumCompare);

    console.log(getMaxOfArray(sumCompare));



    console.log()
        
}

main();
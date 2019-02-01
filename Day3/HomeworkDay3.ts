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
    var arrayOfArrays: Array<number[]> = [];
    var arrayTotal: number[] = [];
    function getMaxOfArray(numArray):number {
        return Math.max.apply(null, numArray);
    }

    for (var i=1; i<=10; i++){
        var arr=arrayGenerator();
        arrayOfArrays.push(arr);
        arrayTotal.push(arraySum(arr));
        console.log('Массив #',i); 
        console.log(arr);
        console.log('Сумма элементов массива');
        console.log(arraySum(arr));
        console.log(' ')       
    }
    
    var maxSum=getMaxOfArray(arrayTotal);
    var MaxIndex= arrayTotal.indexOf(Math.max(...arrayTotal));

    console.log('Номер массива с маскимальной суммой');
    console.log(MaxIndex+1);
    
    
    console.log('Массив с максимальной суммой элементов')
    console.log(arrayOfArrays[MaxIndex]);

    console.log('Сумма элементов массива');
    console.log(maxSum);
    
        
}

main();
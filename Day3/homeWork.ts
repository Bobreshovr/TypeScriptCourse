
function generateArray(max, min):number[]{
    var array:number[] = [];
    for(let i=0; i<7; i++){
        array[i] = Math.floor(Math.random()* (max - min)) + min;
    }
    return array; 
}

function sumArraysElement(anyArray:number[]) : number{
    var sum:number = 0;
    for(let j = 0; j < anyArray.length; j++){
        sum += anyArray[j];
    }
    return sum;
}

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    //Найти массив с максимальной суммой элементов. 
    //Сгенерировать десять массивов из случайных чисел. Вывести их и сумму их элементов в консоль. 
    //Найти среди них один с максимальной суммой элементов. 
    //Указать какой он по счету, повторно вывести этот массив и сумму его элементов. 
    //Генерация массивов и подсчет суммы их элементов оформить в виде отдельных функций.
    var arrayArrays:Array<number[]> = [];
    var sumList:number[] = [];
    var index:number = 0;
    var maxSum : number =0;
    for(let i = 0; i < 10; i++){
        arrayArrays[i] = generateArray(1, 100);
        sumList[i] = sumArraysElement(arrayArrays[i]);
    }
    console.log('Сгенерённые массивы :');
    console.log(arrayArrays);
    console.log('Суммы элементов каждого массива:');
    console.log(sumList);
    for(let i = 0; i < sumList.length; i++){
        if(sumList[i]>maxSum){
            maxSum = sumList[i];
            index = i;
        }
    }
    console.log('Массив с максимальной суммой элементов');
    console.log(arrayArrays[index]);
    console.log( 'Суммы его элементов');
    console.log(maxSum)
    console.log('Это '+(index+1)+'-й по счету массив');
    
}

main();
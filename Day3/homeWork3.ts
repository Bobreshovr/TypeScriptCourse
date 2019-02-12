import { read } from "./console";

function generationRow(): number[] {
    var row: number[] = [];
    for (var i = 0; i < 10; i++) {
        row[i] = Math.random() * 10;
    }
    return row;
}

function sumElementsofRow(row: number[]): number {
    var sum: number = 0;
    for (var i = 0; i < row.length; i++) {
        sum += row[i];
    }
    return sum;
}

async function main(): Promise<void> {

    // Найти массив с максимальной суммой элементов.
    // Сгенерировать десять массивов из случайных чисел.
    // Вывести их и сумму их элементов в консоль.
    // Найти среди них один с максимальной суммой элементов.
    // Указать какой он по счету, повторно вывести этот массив и сумму его элементов.
    // Генерация массивов и подсчет суммы их элементов оформить в виде отдельных функций.

    var listRow: Array<number[]> = [];
    var listSumRow: number[] = [];
    var indexOfList: number = 0;
    var maxSum: number = listSumRow[indexOfList];
    var row: number[] = listRow[indexOfList];

    for (let i = 0; i < 10; i++) {
        listRow[i] = generationRow();
        listSumRow[i] = sumElementsofRow(listRow[i]);
    }

    for (let i = 0; i < 10; i++) {
        if (listSumRow[i] > maxSum) {
            maxSum = listSumRow[i];
            indexOfList = i;
        }
    }

    console.log('Порядковый номер массива с макисмальной суммой элементов: ' + indexOfList);
    console.log('Сумма элементов: ' + maxSum);
    var row: number[] = listRow[indexOfList];
    console.log('Элементы массива:');
    for (let i = 0; i < 10; i++) {
        console.log(row[i]);
    }

}

main();
import { read } from "./console";

async function main(): Promise<void>
{
    console.log('Введите строку для инверсии');
    const defaultString= await read();

    var splittedString= defaultString.split(" ");
    console.log(splittedString);
    
    for ( var i=0;i < splittedString.length ; i++){

    }
    
    // Вычисляем размерность массива splittedString
    // Запускаем цикл длиной в размерность массива
    // Последний член массива становится превым
    // Далее конкатенируем до размерности массива -1
    // Выводим 
}

main();
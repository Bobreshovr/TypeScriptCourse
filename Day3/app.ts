import { read } from "./console";

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    var phrase = 'Простите, сэр. Я Гарри, сэр. Гарри Поттер';
    var arr = phrase.split(' ');
    console.log(arr);
    var arrInvers = [];
    var index;
    for(var i = arr.length; i > 0; i--){
        index = arr.length-i;
        arrInvers[i] = arr[index];
    }
    var resultPrase = arrInvers.join(' ');
    console.log(resultPrase);
}

main();
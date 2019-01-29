import { read } from "./console";

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    console.log('Введи символ');
    const str = await read();
    var splitStr = str.split(" ");
    var newStr : string[];
    for (var i = 0; i < splitStr.length; i++) {
        console.log(splitStr.length);
        newStr[splitStr.length] = splitStr[i];
    }
    console.log(newStr);
}

main();
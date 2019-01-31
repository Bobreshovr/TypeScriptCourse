import { read } from "./console";

async function main(): Promise<void> {
    //Здесь необходимо писать реализацию
    console.log('Введи строку');

    const str = await read();
    var splitStr = str.split(" ");
    var strLength: number = splitStr.length;

    var new2Str: string = '';

    for (var i = strLength - 1; i >= 0; i--) {
        if (i === 0) {
            new2Str += splitStr[i];
            continue;
        }
        new2Str += splitStr[i] + " ";

    }

    console.log(new2Str);
}

main();
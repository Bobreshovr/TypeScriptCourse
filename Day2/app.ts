import { read } from "./console";

async function main(): Promise<void> {
    //Здесь необходимо писать реализацию
    console.log('Введи символ');
    const str = await read();
    if (str.length === 1) {
        if ((str <= 'z' && str >= 'a') || (str <= 'Z' && str >= 'A')) {
            console.log('Это символ латинского алфавита');
        } else {
            console.log('Не символ латинского алфавита');
        }
    } else {
        console.log('Надо было ввести одну букву');
    }
}

main();
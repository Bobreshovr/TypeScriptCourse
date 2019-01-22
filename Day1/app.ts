import { read } from "./console";

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    console.log('Введите имя');
    const str = await read();
    console.log('Hello ' + str);
}

main();
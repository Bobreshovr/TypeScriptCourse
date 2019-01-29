import { read } from "./console";

async function main(): Promise<void>
{
    console.log('Введите один символ');
    const symbol = await read();

    if ('a'< symbol || symbol = < 'z')
}

main();
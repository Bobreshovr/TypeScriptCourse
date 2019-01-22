import { read } from "./console";

async function main(): Promise<void>
{
    console.log('Введи своеимя, щёгол');
    const str = await read();//Здесь необходимо писать реализацию
    console.log('Ну здорово, ',str);
}

main();
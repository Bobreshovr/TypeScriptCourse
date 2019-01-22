import { read } from "./console";

async function main(): Promise<void>
{
    console.log('vvedite imya');
    const str = await read();
    console.log('Hello,', str);
}

main();
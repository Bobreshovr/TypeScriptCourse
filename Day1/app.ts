import { read } from "./console";

async function main(): Promise<void>
{
    console.log("Add some stuff right here: ");
    const str = await read();
    console.log(str);
}

main();
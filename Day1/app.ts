import { read } from "./console";

async function main(): Promise<void>
{
    console.log('введите один символ:');
    var x = await read();

    if (x.length > 1) { console.log('Неверное количество символов. Максимум один') } 
    else { 

    if ((x>='a') && (x<='z')) 
    {
        console.log(x, '= латиница')
    }
        else if ((x>='A') && (x<='Z'))
    {
        console.log(x, '= латиница')
    }
        else 
    {
        console.log(x, '= ne latinica')
    }
}
}

main();
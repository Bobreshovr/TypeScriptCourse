import { read } from "./console";

main();

async function main(): Promise<void>
{

    var coeff_a:number;
    var coeff_b:number;
    var coeff_c:number;

    console.log('Введите старший коэффицент');
    coeff_a = await read();

    console.log('Введите средний коэффицент');
    coeff_b= await read();

    console.log('Введите свободный член');
    coeff_b= await read();

    console.log('Ну здорово, ',str);
}


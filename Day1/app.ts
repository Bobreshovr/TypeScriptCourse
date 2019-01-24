import { read } from "./console";

async function main(): Promise<void>
{
    console.log('Введите старший коэффицент');
    var coeff_a = Number(await read());

    console.log('Введите средний коэффицент');
    var coeff_b = Number(await read());

    console.log('Введите свободный член');
    var coeff_c =  Number(await read());

    console.log('Общий вид уравнения');
    console.log(coeff_a+'x^2+'+coeff_b+'x+'+coeff_c+'=0');

    var discr = coeff_b * coeff_b - 4 *coeff_a * coeff_c;
    console.log('Дискриминант равен',discr);

    
    if (coeff_a === coeff_b)
    {
        if (coeff_c != 0)
        {
            console.log('Уравнение решений не имеет');
        }
        else if (coeff_c === 0)
        {
            console.log('Уравнение имеет бесчисленное множество решений');
        }
    } 
   

    else if (discr >0) 
    {
        console.log('Уравнение имеет два корня');
    }

    else if (discr === 0)
    {
        console.log('Уравнение имеет один корень');
    }

    else
    {
        console.log('Уравнение имеет комплексные корни');
    }



}

main();
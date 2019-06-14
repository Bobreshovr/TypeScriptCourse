import { read } from "./console";
import * as math from 'mathjs';

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

    
    if (coeff_a === 0)
    {
        if (coeff_b === 0)
        {
            if (coeff_c ===0)
            {
                console.log('Уравнение имеет бесчисленное множество решений');
            }

            else
            {
                console.log('Уравнение решений не имеет');
            }
        }
        
        else if (coeff_c !=0)
        {
            console.log('Уравнение сводится к линейному');
        }   
    }


    else if (discr >0) 
    {
        console.log('Уравнение имеет два корня');
        var x1=((-1*coeff_b + Math.sqrt(discr))/(2*coeff_a));
        console.log('x1=',x1);
        var x2=((-1*coeff_b - Math.sqrt(discr))/(2*coeff_a));
        console.log('x2=',x2);
    }

    else if (discr === 0)
    {
        console.log('Уравнение имеет один корень');
        var x=((-1*coeff_b + Math.sqrt(discr))/(2*coeff_a));
        console.log('x=',x);
    }

    else
    {
        console.log('Уравнение имеет комплексные корни');
        const x1i=((-1*coeff_b + math.sqrt(discr))/(2*coeff_a));
        console.log('x1=',x1i);
        const x2i=((-1*coeff_b - math.sqrt(discr))/(2*coeff_a));
        console.log('x2=',x2i);
    }



}

main();
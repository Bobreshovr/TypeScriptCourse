import { read } from "./console";


async function main(): Promise<void>
{

    console.log('Введите A');
    var a = Number(await read());

    console.log('Введите B');
    var b = Number(await read());

    console.log('Введите C');
    var c = Number(await read());
         
    console.log('Квадратное уравнение имеет вид:' , a, 'x^2 +', b, 'x +', c, '= 0');

    var x1 = 0; //первый корень
    var x2 = 0; //второй корень


    if (( a === 0 ) && ( b === 0 ) && ( c != 0 )) 
    {
        console.log('Уравнение решений не имеет')
    } 
    else 
    {
        var d = Number(b*b - (4*a*c)); //дискриминант
        if (d<0) 
        {
            console.log('Привет, Рома, net korney')
        }
        else
        {
            x1 = (-b+d/2)/2*a;
            x2 = (-b-d/2)/2*a; 
            console.log('x1=', x1);
            console.log('x2=', x2);
        }

    }







}

main();
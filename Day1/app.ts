import { read } from "./console";

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    console.log('Введите параметры a, b, c квадратного уровнения');
    const str1 = await read();
    const str2 = await read();
    const str3 = await read();
    var a = Number(str1);
    var b = Number(str2);
    var c = Number(str3);
    var d = Math.pow(b, 2) - 4*a*c;
    var x1 = (-b - Math.sqrt(d))/(2 * a);
    var x2 = (-b + Math.sqrt(d))/(2 * a);
    if (d > 0 && a != 0) {
        console.log(x1);
        console.log(x2);
    } else if (d === 0 && a !=0 && b !=0 && c !=0) {
        console.log(x1);
    } else if (d < 0 ) {
        x1 = -b / (2 * a);
        console.log(x1 + ' - ' + Math.sqrt(-d)/(2 * a) + 'i');
        console.log(x1 + ' + ' + Math.sqrt(-d)/(2 * a) + 'i');
    } else if (a === 0 && b != 0 && c != 0) {
        console.log(-c / b);
    } else if (a === 0 && b === 0 && c === 0) {
        console.log('Бесчисленное множество решений');
    } else if (a === 0 && b === 0 && c != 0) {
        console.log('Уравнение не имеет решений');
    } 
}

main();
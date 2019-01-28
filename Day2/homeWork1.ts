import { read } from "./console";

enum Rub { Rub1 = 'рубль', Rub2 = 'рубля', Rub3 = 'рублей' };

function numberWriter(input, lastDigit) {
    if ((lastDigit === 0) || (lastDigit >= 5 && lastDigit < 10)) {
        console.log(input + " " + Rub.Rub3);
    } else if (lastDigit === 1) {
        console.log(input + " " + Rub.Rub1);
    } else if (lastDigit >= 2 && lastDigit < 5) {
        console.log(input + " " + Rub.Rub2);
    }
}

async function main(): Promise<void> {
    //Здесь необходимо писать реализацию

    console.log('Введи произвольное число');

    const str = await read();
    var numberEntered = Number(str);

    if (!Number.isNaN(numberEntered) && Number.isInteger(numberEntered) && numberEntered >= 0) {
        var nubmerLenght = str.length;

        if (nubmerLenght != 0) {
            switch (Number(str[nubmerLenght - 2])) {
                case 1:
                    console.log(numberEntered + " " + Rub.Rub3);
                    break;
                default:
                    numberWriter(numberEntered, Number(str[nubmerLenght - 1]));
            }
        } else {
            console.log('Число не было введено');
        }
    } else {
        console.log('Можно вводить только целое положительное число');
    }
}

main();
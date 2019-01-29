import { read } from "./console";
import { Readable } from 'stream';

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    enum RUB {Rub1 = ' рубля', Rub2 = ' рублей', Rub3 = ' Рубль'};
    console.log('Зафигачь число по-братски, ща поссчитаю');
    var numderEntereted = Number((await read()));
    if(isNaN(numderEntereted)===true){
        console.warn('Эй, Поц, я же сказал фигачь целое ЧИСЛО, БЛЭТ..');
        
    } else{
        if(!((numderEntereted >= 11) && (numderEntereted <= 19))){
            switch(numderEntereted%10){
                case 0:
                case 5:
                case 6:
                case 7:
                case 8:{
                    console.log(numderEntereted + RUB.Rub2 + ' семки есть?');
                    break;
                }
                case 2:
                case 3:
                case 4:{
                    console.log(numderEntereted + RUB.Rub1 + ' давай сюда, епт!');
                    break;
                }
                case 1:{
                    console.log(numderEntereted + RUB.Rub3+ ' подкинуть еще?');
                    break;
                }
            }
        }
        else {
            console.log(numderEntereted + RUB.Rub2);
            console.log(numderEntereted%10);
        }
    }
}

main();
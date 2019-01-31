import { read } from "./console";

async function main(): Promise<void>
{
    console.log('Введите строку для инверсии');
    const startingString= await read();

    var splittedString= startingString.split(" ");
    //console.log(splittedString);

    var invertedString=''
    
    for ( var i=splittedString.length-1; i>=0  ; i--){
         invertedString = invertedString + splittedString[i] + ' ';
    }
    
    console.log(invertedString); 
}

main();
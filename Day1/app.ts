import { read } from "./console";
import { Parameter } from "./model";
import { depict, root1, root2, regularDiscriminant, depictErr } from "./utilities";

async function main(): Promise<void>
{   
    const param = new Parameter();
    const even = (n: number) => !(n % 2);

    let d = undefined;

    depict("Insert 'a': ");
    param.setA = parseInt(await read());

    depict("Insert 'b': ");
    param.setB = parseInt(await read());
    
    depict("Insert 'c': ");
    param.setC = parseInt(await read());

    depict(`\nIt turns out the following equation: 
        +(${param.A}x^2) + (${param.B}x) + (${param.C}) = 0`);

    depict(`\nComputed discriminant: ${d = regularDiscriminant(param.A, param.B, param.C)}`);

    const r1 = root1(param.A, d, param.C);
    const r2 = root2(param.A, d, param.C);

    if (param.A === 0) {
        param.B === 0 
            ? param.C === 0 
                ? depict("\nEquation has infinity amount of solution.")
                : depict("\nThere is no solution for this.")
            : depict("\nEquation has the single solution and gets linear thereafter.");
    } else if (param.A !== 0 && d > 0) {        
        r1 !== r2 
            ? depict(`\nEquation has two roots are different from each other.\n\t
                First root equals to ${r1},\n\t
                Second root equals to ${r2}`) 
            : depictErr("\nSomething went wrong. Roots should be different");        
    } else if ((param.A && param.B && param.C !== 0) && d === 0) {
        r1 === r2 
            ? depict(`\nEquation has two roots are equal to each other.\n\t
                First and Second root equals to ${r1 | r2}`)
            : depictErr("\nSomething went wrong. Roots should be equal");
    } else {
        depict("Equation has complex roots.");
    }
}

main();
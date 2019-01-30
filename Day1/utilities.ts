export let regularDiscriminant = (a: number, b: number, c: number) => b ** 2 - 4 * a * c;
export let extraDiscriminant = (a: number, b: number, c: number) => (b / 2) ** 2 - a * c; //does not work

export let root1 = (a: number, d: number, b: number) => (-b + (squareRootOf(d))) / (2 * a);
export let root2 = (a: number, d: number, b: number) => (-b - (squareRootOf(d))) / (2 * a);

export let singleRoot = (a: number, b: number) => -b / (2 * a); //not applicable

export let depict: any = (msg: any) => console.log(msg);
export let depictErr: any = (msg: any) => console.error(msg);
export let squareRootOf = (inbound: number) => Math.sqrt(inbound);
 
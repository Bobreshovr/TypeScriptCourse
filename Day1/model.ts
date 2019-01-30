import { depictErr } from "./utilities";

class Parameter {
    private a = undefined;
    private b = undefined;
    private c = undefined;

    get A(): any { return this.a; }
    get B(): any { return this.b; }
    get C(): any { return this.c; }

    set setA(inbound: any) { 
        typeof inbound === "number" && !isNaN(inbound)
            ? this.a = inbound 
            : depictErr("Something went wrong. Number awaited though.");
    }

    set setB(inbound: any) {
        typeof inbound === "number" && !isNaN(inbound)
            ? this.b = inbound 
            : depictErr("Something went wrong. Number awaited though.");
    }

    set setC(inbound: any) {
        typeof inbound === "number" && !isNaN(inbound)
            ? this.c = inbound 
            : depictErr("Something went wrong. Number awaited though.");
    }

    /*toSet: any = (entrance: any) => {
        if (isNaN(entrance) && typeof entrance === "number") {
            this.c = entrance;
        } else if (!isNaN(entrance) && typeof entrance !== "number") {
            this.c = +entrance;
        } else {
            depictErr("Something went wrong. Number awaited though.");
        }
    };*/
}

export { Parameter }
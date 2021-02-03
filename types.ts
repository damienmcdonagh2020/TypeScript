let myNumber: number = 55;
console.log("MYNumber is: " + myNumber);

let color: string = "Hello World";
console.log(color);

let myBool: boolean = false;
console.log(myBool);

let list: Array<string> = ["Hello", "3", "false"];
for (let i = 0; i < list.length; i++) {
    console.log("String " + (i + 1) + " is " + list[i]);
}//for loop

let listb: string[] = ["Hello", "3", "false"];
for (let i = 0; i < listb.length; i++) {
    console.log("String " + (i + 1) + " is " + listb[i]);
}//for loop

let notSure: any = 4;
console.log(notSure);

let listAny: any[] = [2, "test", false];
for (let i = 0; i < listAny.length; i++) {
    console.log("String " + (i + 1) + " is " + listAny[i]);
}//for loop

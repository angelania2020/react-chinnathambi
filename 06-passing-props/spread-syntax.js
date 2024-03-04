var items = ["1", "2", "3"];

function printStuff(a, b, c) {
    console.log("Print: " + a + " " + b + " " + c);
}

// With spread syntax
printStuff(...items);

// Without spread syntax
printStuff(items[0], items[1], items[2]);
const n: number = 5;

// Upper part
for (let i = 1; i <= n; i++) {
    let row = "";

    // Left spaces
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    // Numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Left spaces
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    // Numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}
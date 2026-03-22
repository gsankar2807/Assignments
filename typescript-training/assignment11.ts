let n: number = 5;

//array
let arr: number[] = [];

// Store numbers in array
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

// Upper half
for (let i = 1; i <= n; i++) {
    let row = "";

    for (let s = 0; s < n - i; s++) {
        row += " ";
    }

    for (let j = 0; j < i; j++) {
        row += arr[j] + " ";
    }

    console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let s = 0; s < n - i; s++) {
        row += " ";
    }

    for (let j = 0; j < i; j++) {
        row += arr[j] + " ";
    }

    console.log(row);
}
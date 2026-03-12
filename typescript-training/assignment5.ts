// Names
let names: string[] = [
"Alice Johnson",
"Bob Smith",
"Carol Davis",
"David Brown",
"Eva Green"
];

// Base Salaries
let baseSalary: number[] = [75000, 68000, 82000, 90000, 60000];

// Experience years
let experience: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];

// Ratings
let rating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];

//  Create Map to store Hikepercentage
let hikeMap = new Map<string, number>();

// Loop through all employees
for (let i = 0; i < names.length; i++) {

    let variablePay = 0;
    let bonus = 0;

    // verify rating condition
    if (rating[i] >= 4) {
        variablePay = 15;
        bonus = 1500;
    }

    else if (rating[i] >= 3 && rating[i] < 4) {
        variablePay = 10;
        bonus = 1200;
    }

    else {
        variablePay = 3;
        bonus = 300;
    }

    // Reward  experience >=5
    let reward = 0;

    if (experience[i] >= 5) {
        reward = 5000;
    }

    // Calculate Hike
    let hike = (baseSalary[i] * variablePay / 100) + bonus + reward;

    // Calculate Hike percentage
    let hikePercent = hike / baseSalary[i];

    // Store result in Map
    hikeMap.set(names[i], hikePercent);
}

// Print result
console.log("Employee Hike Percentage:");

hikeMap.forEach((value, key) => {
    console.log(key + " : " + (value * 100).toFixed(2) + "%");
});
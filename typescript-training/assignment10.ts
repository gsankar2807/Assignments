function maxProfit(prices: number[]): number {

    let minPrice: number = prices[0];   // Step 1
    let maxProfit: number = 0;          // Step 2

    for (let i = 1; i < prices.length; i++) {   // Step 3

        if (prices[i] < minPrice) {             // Step 4
            minPrice = prices[i];               // Step 5
        } else {
            let profit: number = prices[i] - minPrice;  // Step 6

            if (profit > maxProfit) {           // Step 7
                maxProfit = profit;             // Step 8
            }
        }
    }

    return maxProfit;   // Step 9
}


// Array input
let prices1: number[] = [7, 1, 5, 3, 6, 4];
let prices2: number[] = [7,6,4,3,1];

// Calling function
let output1 = maxProfit(prices1);
let output2 = maxProfit(prices2);

// Printing output
console.log("The output result for input 1:" + output1); // Output: 5
console.log("The output result for input 2:" + output2); // Output: 5
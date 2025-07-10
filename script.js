// // // // // /* Question-1  -----GREEDY-----

// // // // // 122. Best Time to Buy and Sell Stock II
// // // // // Medium
// // // // // Topics
// // // // // premium lock icon
// // // // // Companies
// // // // // You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// // // // // On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// // // // // Find and return the maximum profit you can achieve.

// // // // // soultion-1 in javascript
// // // // // var function profit(profits){
// // // // // let max_profit = 0;
// // // // // for(let i =1; i<profits.length;i++){
// // // // // if(profits[i]>profits[i-1]){
// // // // // max_profit+= profit[i]+profit[i-1]}
// // // // // }
// // // // // return max_profit;
// // // // // }



// // // // // */


// // // // // // question-2 
// // // // // // 123. Best Time to Buy and Sell Stock III
// // // // // // Hard
// // // // // // Topics
// // // // // // premium lock icon
// // // // // // Companies
// // // // // // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // // // // // Find the maximum profit you can achieve. You may complete at most two transactions.

// // // // // // Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// // // // // solution-2
// // // // // /**

// // // // // var maxProfit = function(prices) {
// // // // //     let buy1 = -Infinity;
// // // // //     let sell1 = 0;
// // // // //     let buy2 = -Infinity;
// // // // //     let sell2 = 0;
// // // // //     for(const price of prices){
// // // // //         buy1 = Math.max(buy1,-price);
// // // // //         sell1 = Math.max(sell1, buy1 + price);
// // // // //         buy2 = Math.max(buy2,sell1 -price);
// // // // //         sell2 = Math.max(sell2,buy2 +price);
// // // // //     }
// // // // //     return sell2;
    
// // // // // };
// // // // question-3/**
// // // //  * @param {number} k
// // // //  * @param {number[]} prices
// // // //  * @return {number}
// // // //  */
// // // // let maxProfit = function(k, prices) {
// // // //     const n = prices.length;

// // // //     // Edge case: no prices or no transactions allowed
// // // //     if (n === 0 || k === 0) return 0;

// // // //     // Optimization: if we can trade every day, use greedy approach (like LC-122)
// // // //     if (k >= n / 2) {
// // // //         let profit = 0;
// // // //         for (let i = 1; i < n; i++) {
// // // //             if (prices[i] > prices[i - 1]) {
// // // //                 profit += prices[i] - prices[i - 1]; // buy yesterday, sell today
// // // //             }
// // // //         }
// // // //         return profit;
// // // //     }

// // // //     // DP table: dp[t][d] → max profit up to day d with t transactions
// // // //     const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

// // // //     for (let t = 1; t <= k; t++) {
// // // //         let maxDiff = -prices[0]; // max(dp[t-1][m] - prices[m])
// // // //         for (let d = 1; d < n; d++) {
// // // //             dp[t][d] = Math.max(dp[t][d - 1], prices[d] + maxDiff);
// // // //             maxDiff = Math.max(maxDiff, dp[t - 1][d] - prices[d]);
// // // //         }
// // // //     }

// // // //     return dp[k][n - 1]; // Final answer
// // // // };
// // // 3573. Best Time to Buy and Sell Stock V
// // // Medium
// // // Topics
// // // premium lock icon
// // // Companies
// // // Hint
// // // You are given an integer array prices where prices[i] is the price of a stock in dollars on the ith day, and an integer k.

// // // You are allowed to make at most k transactions, where each transaction can be either of the following:

// // // Normal transaction: Buy on day i, then sell on a later day j where i < j. You profit prices[j] - prices[i].

// // // Short selling transaction: Sell on day i, then buy back on a later day j where i < j. You profit prices[i] - prices[j].

// // // Note that you must complete each transaction before starting another. Additionally, you can't buy or sell on the same day you are selling or buying back as part of a previous transaction.

// // // Return the maximum total profit you can earn by making at most k transactions.

 

// // // Example 1:

// // // Input: prices = [1,7,9,8,2], k = 2

// // // Output: 14

// // // Explanation:

// // // We can make $14 of profit through 2 transactions:
// // // A normal transaction: buy the stock on day 0 for $1 then sell it on day 2 for $9.
// // // A short selling transaction: sell the stock on day 3 for $8 then buy back on day 4 for $2.
// // // Example 2:

// // // Input: prices = [12,16,19,19,8,1,19,13,9], k = 3

// // // Output: 36

// // // Explanation:

// // // We can make $36 of profit through 3 transactions:
// // // A normal transaction: buy the stock on day 0 for $12 then sell it on day 2 for $19.
// // // A short selling transaction: sell the stock on day 3 for $19 then buy back on day 4 for $8.
// // // A normal transaction: buy the stock on day 5 for $1 then sell it on day 6 for $19.
 

// // // Constraints:

// // // 2 <= prices.length <= 103
// // // 1 <= prices[i] <= 109
// // // 1 <= k <= prices.length / 2
// // function maxProfitV(k, prices) {
// //   const n = prices.length;
// //   if (n === 0 || k === 0) return 0;

// //   // Quick path: unlimited transactions allowed
// //   if (k >= n / 2) {
// //     let profit = 0;
// //     for (let i = 1; i < n; i++) {
// //       if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
// //     }
// //     return profit;
// //   }

// //   // Setup DP table
// //   const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

// //   for (let t = 1; t <= k; t++) {
// //     let maxNormalDiff = -prices[0];
// //     let maxShortDiff = +prices[0];
// //     for (let d = 1; d < n; d++) {
// //       dp[t][d] = Math.max(
// //         dp[t][d - 1],
// //         prices[d] + maxNormalDiff,
// //         -prices[d] + maxShortDiff
// //       );
// //       maxNormalDiff = Math.max(
// //         maxNormalDiff,
// //         dp[t - 1][d] - prices[d]
// //       );
// //       maxShortDiff = Math.max(
// //         maxShortDiff,
// //         dp[t - 1][d] + prices[d]
// //       );
// //     }
// //   }
// //   return dp[k][n - 1];
// // }

// leetcode -3333 /**
//  * @param {number[]} prices
//  * @param {number} k
//  * @return {number}
//  */
// /**
//  * @param {number[]} prices
//  * @param {number} k
//  * @return {number}
//  */
// function maximumProfit(prices, k) {
//     const n = prices.length;
//     if (n < 2 || k === 0) {
//         return 0;
//     }

//     const cash = new Array(k + 1).fill().map(() => new Array(n).fill(0));
//     const longHold = new Array(k + 1).fill().map(() => new Array(n).fill(-Infinity));
//     const shortHold = new Array(k + 1).fill().map(() => new Array(n).fill(-Infinity));

//     for (let i = 1; i <= k; i++) {
//         longHold[i][0] = -prices[0];
//         shortHold[i][0] = prices[0];
//         for (let j = 1; j < n; j++) {
//             cash[i][j] = Math.max(
//                 cash[i][j - 1],
//                 longHold[i][j - 1] + prices[j],
//                 shortHold[i][j - 1] - prices[j]
//             );
//             longHold[i][j] = Math.max(
//                 longHold[i][j - 1],
//                 cash[i - 1][j - 1] - prices[j]
//             );
//             shortHold[i][j] = Math.max(
//                 shortHold[i][j - 1],
//                 cash[i - 1][j - 1] + prices[j]
//             );
//         }
//     }

//     return cash[k][n - 1];
// }
leet code -217 

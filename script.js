// /* Question-1  -----GREEDY-----

// 122. Best Time to Buy and Sell Stock II
// Medium
// Topics
// premium lock icon
// Companies
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// soultion-1 in javascript
// var function profit(profits){
// let max_profit = 0;
// for(let i =1; i<profits.length;i++){
// if(profits[i]>profits[i-1]){
// max_profit+= profit[i]+profit[i-1]}
// }
// return max_profit;
// }



// */


// // question-2 
// // 123. Best Time to Buy and Sell Stock III
// // Hard
// // Topics
// // premium lock icon
// // Companies
// // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // Find the maximum profit you can achieve. You may complete at most two transactions.

// // Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// solution-2
// /**

// var maxProfit = function(prices) {
//     let buy1 = -Infinity;
//     let sell1 = 0;
//     let buy2 = -Infinity;
//     let sell2 = 0;
//     for(const price of prices){
//         buy1 = Math.max(buy1,-price);
//         sell1 = Math.max(sell1, buy1 + price);
//         buy2 = Math.max(buy2,sell1 -price);
//         sell2 = Math.max(sell2,buy2 +price);
//     }
//     return sell2;
    
// };
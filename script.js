// // // // // // // // // // // // // // // // // // // // /* Question-1  -----GREEDY-----

// // // // // // // // // // // // // // // // // // // // 122. Best Time to Buy and Sell Stock II
// // // // // // // // // // // // // // // // // // // // Medium
// // // // // // // // // // // // // // // // // // // // Topics
// // // // // // // // // // // // // // // // // // // // premium lock icon
// // // // // // // // // // // // // // // // // // // // Companies
// // // // // // // // // // // // // // // // // // // // You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// // // // // // // // // // // // // // // // // // // // On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// // // // // // // // // // // // // // // // // // // // Find and return the maximum profit you can achieve.

// // // // // // // // // // // // // // // // // // // // soultion-1 in javascript
// // // // // // // // // // // // // // // // // // // // var function profit(profits){
// // // // // // // // // // // // // // // // // // // // let max_profit = 0;
// // // // // // // // // // // // // // // // // // // // for(let i =1; i<profits.length;i++){
// // // // // // // // // // // // // // // // // // // // if(profits[i]>profits[i-1]){
// // // // // // // // // // // // // // // // // // // // max_profit+= profit[i]+profit[i-1]}
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // return max_profit;
// // // // // // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // // // // // // */


// // // // // // // // // // // // // // // // // // // // // question-2 
// // // // // // // // // // // // // // // // // // // // // 123. Best Time to Buy and Sell Stock III
// // // // // // // // // // // // // // // // // // // // // Hard
// // // // // // // // // // // // // // // // // // // // // Topics
// // // // // // // // // // // // // // // // // // // // // premium lock icon
// // // // // // // // // // // // // // // // // // // // // Companies
// // // // // // // // // // // // // // // // // // // // // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // // // // // // // // // // // // // // // // // // // // Find the maximum profit you can achieve. You may complete at most two transactions.

// // // // // // // // // // // // // // // // // // // // // Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// // // // // // // // // // // // // // // // // // // // solution-2
// // // // // // // // // // // // // // // // // // // // /**

// // // // // // // // // // // // // // // // // // // // var maxProfit = function(prices) {
// // // // // // // // // // // // // // // // // // // //     let buy1 = -Infinity;
// // // // // // // // // // // // // // // // // // // //     let sell1 = 0;
// // // // // // // // // // // // // // // // // // // //     let buy2 = -Infinity;
// // // // // // // // // // // // // // // // // // // //     let sell2 = 0;
// // // // // // // // // // // // // // // // // // // //     for(const price of prices){
// // // // // // // // // // // // // // // // // // // //         buy1 = Math.max(buy1,-price);
// // // // // // // // // // // // // // // // // // // //         sell1 = Math.max(sell1, buy1 + price);
// // // // // // // // // // // // // // // // // // // //         buy2 = Math.max(buy2,sell1 -price);
// // // // // // // // // // // // // // // // // // // //         sell2 = Math.max(sell2,buy2 +price);
// // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // //     return sell2;
    
// // // // // // // // // // // // // // // // // // // // };
// // // // // // // // // // // // // // // // // // // question-3/**
// // // // // // // // // // // // // // // // // // //  * @param {number} k
// // // // // // // // // // // // // // // // // // //  * @param {number[]} prices
// // // // // // // // // // // // // // // // // // //  * @return {number}
// // // // // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // // // // let maxProfit = function(k, prices) {
// // // // // // // // // // // // // // // // // // //     const n = prices.length;

// // // // // // // // // // // // // // // // // // //     // Edge case: no prices or no transactions allowed
// // // // // // // // // // // // // // // // // // //     if (n === 0 || k === 0) return 0;

// // // // // // // // // // // // // // // // // // //     // Optimization: if we can trade every day, use greedy approach (like LC-122)
// // // // // // // // // // // // // // // // // // //     if (k >= n / 2) {
// // // // // // // // // // // // // // // // // // //         let profit = 0;
// // // // // // // // // // // // // // // // // // //         for (let i = 1; i < n; i++) {
// // // // // // // // // // // // // // // // // // //             if (prices[i] > prices[i - 1]) {
// // // // // // // // // // // // // // // // // // //                 profit += prices[i] - prices[i - 1]; // buy yesterday, sell today
// // // // // // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // // // //         return profit;
// // // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // // //     // DP table: dp[t][d] → max profit up to day d with t transactions
// // // // // // // // // // // // // // // // // // //     const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

// // // // // // // // // // // // // // // // // // //     for (let t = 1; t <= k; t++) {
// // // // // // // // // // // // // // // // // // //         let maxDiff = -prices[0]; // max(dp[t-1][m] - prices[m])
// // // // // // // // // // // // // // // // // // //         for (let d = 1; d < n; d++) {
// // // // // // // // // // // // // // // // // // //             dp[t][d] = Math.max(dp[t][d - 1], prices[d] + maxDiff);
// // // // // // // // // // // // // // // // // // //             maxDiff = Math.max(maxDiff, dp[t - 1][d] - prices[d]);
// // // // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // // //     return dp[k][n - 1]; // Final answer
// // // // // // // // // // // // // // // // // // // };
// // // // // // // // // // // // // // // // // // 3573. Best Time to Buy and Sell Stock V
// // // // // // // // // // // // // // // // // // Medium
// // // // // // // // // // // // // // // // // // Topics
// // // // // // // // // // // // // // // // // // premium lock icon
// // // // // // // // // // // // // // // // // // Companies
// // // // // // // // // // // // // // // // // // Hint
// // // // // // // // // // // // // // // // // // You are given an integer array prices where prices[i] is the price of a stock in dollars on the ith day, and an integer k.

// // // // // // // // // // // // // // // // // // You are allowed to make at most k transactions, where each transaction can be either of the following:

// // // // // // // // // // // // // // // // // // Normal transaction: Buy on day i, then sell on a later day j where i < j. You profit prices[j] - prices[i].

// // // // // // // // // // // // // // // // // // Short selling transaction: Sell on day i, then buy back on a later day j where i < j. You profit prices[i] - prices[j].

// // // // // // // // // // // // // // // // // // Note that you must complete each transaction before starting another. Additionally, you can't buy or sell on the same day you are selling or buying back as part of a previous transaction.

// // // // // // // // // // // // // // // // // // Return the maximum total profit you can earn by making at most k transactions.

 

// // // // // // // // // // // // // // // // // // Example 1:

// // // // // // // // // // // // // // // // // // Input: prices = [1,7,9,8,2], k = 2

// // // // // // // // // // // // // // // // // // Output: 14

// // // // // // // // // // // // // // // // // // Explanation:

// // // // // // // // // // // // // // // // // // We can make $14 of profit through 2 transactions:
// // // // // // // // // // // // // // // // // // A normal transaction: buy the stock on day 0 for $1 then sell it on day 2 for $9.
// // // // // // // // // // // // // // // // // // A short selling transaction: sell the stock on day 3 for $8 then buy back on day 4 for $2.
// // // // // // // // // // // // // // // // // // Example 2:

// // // // // // // // // // // // // // // // // // Input: prices = [12,16,19,19,8,1,19,13,9], k = 3

// // // // // // // // // // // // // // // // // // Output: 36

// // // // // // // // // // // // // // // // // // Explanation:

// // // // // // // // // // // // // // // // // // We can make $36 of profit through 3 transactions:
// // // // // // // // // // // // // // // // // // A normal transaction: buy the stock on day 0 for $12 then sell it on day 2 for $19.
// // // // // // // // // // // // // // // // // // A short selling transaction: sell the stock on day 3 for $19 then buy back on day 4 for $8.
// // // // // // // // // // // // // // // // // // A normal transaction: buy the stock on day 5 for $1 then sell it on day 6 for $19.
 

// // // // // // // // // // // // // // // // // // Constraints:

// // // // // // // // // // // // // // // // // // 2 <= prices.length <= 103
// // // // // // // // // // // // // // // // // // 1 <= prices[i] <= 109
// // // // // // // // // // // // // // // // // // 1 <= k <= prices.length / 2
// // // // // // // // // // // // // // // // // function maxProfitV(k, prices) {
// // // // // // // // // // // // // // // // //   const n = prices.length;
// // // // // // // // // // // // // // // // //   if (n === 0 || k === 0) return 0;

// // // // // // // // // // // // // // // // //   // Quick path: unlimited transactions allowed
// // // // // // // // // // // // // // // // //   if (k >= n / 2) {
// // // // // // // // // // // // // // // // //     let profit = 0;
// // // // // // // // // // // // // // // // //     for (let i = 1; i < n; i++) {
// // // // // // // // // // // // // // // // //       if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     return profit;
// // // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // // //   // Setup DP table
// // // // // // // // // // // // // // // // //   const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

// // // // // // // // // // // // // // // // //   for (let t = 1; t <= k; t++) {
// // // // // // // // // // // // // // // // //     let maxNormalDiff = -prices[0];
// // // // // // // // // // // // // // // // //     let maxShortDiff = +prices[0];
// // // // // // // // // // // // // // // // //     for (let d = 1; d < n; d++) {
// // // // // // // // // // // // // // // // //       dp[t][d] = Math.max(
// // // // // // // // // // // // // // // // //         dp[t][d - 1],
// // // // // // // // // // // // // // // // //         prices[d] + maxNormalDiff,
// // // // // // // // // // // // // // // // //         -prices[d] + maxShortDiff
// // // // // // // // // // // // // // // // //       );
// // // // // // // // // // // // // // // // //       maxNormalDiff = Math.max(
// // // // // // // // // // // // // // // // //         maxNormalDiff,
// // // // // // // // // // // // // // // // //         dp[t - 1][d] - prices[d]
// // // // // // // // // // // // // // // // //       );
// // // // // // // // // // // // // // // // //       maxShortDiff = Math.max(
// // // // // // // // // // // // // // // // //         maxShortDiff,
// // // // // // // // // // // // // // // // //         dp[t - 1][d] + prices[d]
// // // // // // // // // // // // // // // // //       );
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // //   return dp[k][n - 1];
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // leetcode -3333 /**
// // // // // // // // // // // // // // // //  * @param {number[]} prices
// // // // // // // // // // // // // // // //  * @param {number} k
// // // // // // // // // // // // // // // //  * @return {number}
// // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // /**
// // // // // // // // // // // // // // // //  * @param {number[]} prices
// // // // // // // // // // // // // // // //  * @param {number} k
// // // // // // // // // // // // // // // //  * @return {number}
// // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // function maximumProfit(prices, k) {
// // // // // // // // // // // // // // // //     const n = prices.length;
// // // // // // // // // // // // // // // //     if (n < 2 || k === 0) {
// // // // // // // // // // // // // // // //         return 0;
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     const cash = new Array(k + 1).fill().map(() => new Array(n).fill(0));
// // // // // // // // // // // // // // // //     const longHold = new Array(k + 1).fill().map(() => new Array(n).fill(-Infinity));
// // // // // // // // // // // // // // // //     const shortHold = new Array(k + 1).fill().map(() => new Array(n).fill(-Infinity));

// // // // // // // // // // // // // // // //     for (let i = 1; i <= k; i++) {
// // // // // // // // // // // // // // // //         longHold[i][0] = -prices[0];
// // // // // // // // // // // // // // // //         shortHold[i][0] = prices[0];
// // // // // // // // // // // // // // // //         for (let j = 1; j < n; j++) {
// // // // // // // // // // // // // // // //             cash[i][j] = Math.max(
// // // // // // // // // // // // // // // //                 cash[i][j - 1],
// // // // // // // // // // // // // // // //                 longHold[i][j - 1] + prices[j],
// // // // // // // // // // // // // // // //                 shortHold[i][j - 1] - prices[j]
// // // // // // // // // // // // // // // //             );
// // // // // // // // // // // // // // // //             longHold[i][j] = Math.max(
// // // // // // // // // // // // // // // //                 longHold[i][j - 1],
// // // // // // // // // // // // // // // //                 cash[i - 1][j - 1] - prices[j]
// // // // // // // // // // // // // // // //             );
// // // // // // // // // // // // // // // //             shortHold[i][j] = Math.max(
// // // // // // // // // // // // // // // //                 shortHold[i][j - 1],
// // // // // // // // // // // // // // // //                 cash[i - 1][j - 1] + prices[j]
// // // // // // // // // // // // // // // //             );
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     return cash[k][n - 1];
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // leet code -219
// // // // // // // // // // // // // // Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// // // // // // // // // // // // // // Example 1:

// // // // // // // // // // // // // // Input: nums = [1,2,3,1], k = 3
// // // // // // // // // // // // // // Output: true
// // // // // // // // // // // // // // Example 2:

// // // // // // // // // // // // // // Input: nums = [1,0,1,1], k = 1
// // // // // // // // // // // // // // Output: true
// // // // // // // // // // // // // // Example 3:

// // // // // // // // // // // // // // Input: nums = [1,2,3,1,2,3], k = 2
// // // // // // // // // // // // // // Output: false
 

// // // // // // // // // // // // // // Constraints:

// // // // // // // // // // // // // // 1 <= nums.length <= 105
// // // // // // // // // // // // // // -109 <= nums[i] <= 109
// // // // // // // // // // // // // // 0 <= k <= 105
// // // // // // // // // // // // // /**
// // // // // // // // // // // // //  * @param {number[]} nums
// // // // // // // // // // // // //  * @param {number} k
// // // // // // // // // // // // //  * @return {boolean}
// // // // // // // // // // // // //  */
// // // // // // // // // // // // // var containsNearbyDuplicate = function(nums, k) {
// // // // // // // // // // // // //     let map = new Map();
// // // // // // // // // // // // //     for(let i = 0; i<nums.length;i++){
// // // // // // // // // // // // //         if(map.has(nums[i])){
// // // // // // // // // // // // //             let previousindex = map.get(nums[i]);
// // // // // // // // // // // // //             if(i - previousindex <= k){
// // // // // // // // // // // // //                 return true;
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //         map.set(nums[i],i);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     return false;
// // // // // // // // // // // // // };
// // // // // // // // // // // // // You are given an integer array nums and two integers indexDiff and valueDiff.

// // // // // // // // // // // // // Find a pair of indices (i, j) such that:

// // // // // // // // // // // // // i != j,
// // // // // // // // // // // // // abs(i - j) <= indexDiff.
// // // // // // // // // // // // // abs(nums[i] - nums[j]) <= valueDiff, and
// // // // // // // // // // // // // Return true if such pair exists or false otherwise.

 

// // // // // // // // // // // // // Example 1:

// // // // // // // // // // // // // Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// // // // // // // // // // // // // Output: true
// // // // // // // // // // // // // Explanation: We can choose (i, j) = (0, 3).
// // // // // // // // // // // // // We satisfy the three conditions:
// // // // // // // // // // // // // i != j --> 0 != 3
// // // // // // // // // // // // // abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// // // // // // // // // // // // // abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
// // // // // // // // // // // // // Example 2:

// // // // // // // // // // // // // Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// // // // // // // // // // // // // Output: false
// // // // // // // // // // // // // Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
// // // // // // // // // // // //  /**
// // // // // // // // // // // //  * @param {number[]} nums
// // // // // // // // // // // //  * @param {number} indexDiff
// // // // // // // // // // // //  * @param {number} valueDiff
// // // // // // // // // // // //  * @return {boolean}
// // // // // // // // // // // //  */

// // // // // // // // // // // // var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
// // // // // // // // // // // //     if (valueDiff < 0) return false;

// // // // // // // // // // // //     const buckets = new Map();
// // // // // // // // // // // //     const size = valueDiff + 1; // bucket size

// // // // // // // // // // // //     for (let i = 0; i < nums.length; i++) {
// // // // // // // // // // // //         const bucketId = Math.floor(nums[i] / size);

// // // // // // // // // // // //         // Same bucket
// // // // // // // // // // // //         if (buckets.has(bucketId)) return true;

// // // // // // // // // // // //         // Check neighboring buckets
// // // // // // // // // // // //         if (
// // // // // // // // // // // //             (buckets.has(bucketId - 1) && Math.abs(nums[i] - buckets.get(bucketId - 1)) <= valueDiff) ||
// // // // // // // // // // // //             (buckets.has(bucketId + 1) && Math.abs(nums[i] - buckets.get(bucketId + 1)) <= valueDiff)
// // // // // // // // // // // //         ) {
// // // // // // // // // // // //             return true;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         // Add to bucket
// // // // // // // // // // // //         buckets.set(bucketId, nums[i]);

// // // // // // // // // // // //         // Remove bucket outside indexDiff
// // // // // // // // // // // //         if (i >= indexDiff) {
// // // // // // // // // // // //             const oldBucketId = Math.floor(nums[i - indexDiff] / size);
// // // // // // // // // // // //             buckets.delete(oldBucketId);
// // // // // // // // // // // //         }
// // // // // // // // // // // //     }

// // // // // // // // // // // //     return false;
// // // // // // // // // // // // };
// // // // // // // // // // // Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// // // // // // // // // // // Example 1:

// // // // // // // // // // // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// // // // // // // // // // // Output: 6
// // // // // // // // // // // Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// // // // // // // // // // // Example 2:

// // // // // // // // // // // Input: nums = [1]
// // // // // // // // // // // Output: 1
// // // // // // // // // // // Explanation: The subarray [1] has the largest sum 1.
// // // // // // // // // // // Example 3:

// // // // // // // // // // // Input: nums = [5,4,-1,7,8]
// // // // // // // // // // // Output: 23
// // // // // // // // // // // Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// // // // // // // // // // // Constraints:

// // // // // // // // // // // 1 <= nums.length <= 105
// // // // // // // // // // // -104 <= nums[i] <= 104
// // // // // // // // // //  **
// // // // // // // // // //  * @param {number[]} nums
// // // // // // // // // //  * @return {number}
// // // // // // // // // //  */
// // // // // // // // // // var maxSubArray = function(nums) {
// // // // // // // // // //     let maxSoFar = nums[0];
// // // // // // // // // //     let currentSum = nums[0];

// // // // // // // // // //     for (let i = 1; i < nums.length; i++) {
// // // // // // // // // //         currentSum = Math.max(nums[i], currentSum + nums[i]);
// // // // // // // // // //         maxSoFar = Math.max(maxSoFar, currentSum);
// // // // // // // // // //     }

// // // // // // // // // //     return maxSoFar;
// // // // // // // // // // };
// // // // // // // // // Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// // // // // // // // // Example 1:

// // // // // // // // // Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// // // // // // // // // Output: [[1,6],[8,10],[15,18]]
// // // // // // // // // Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// // // // // // // // // Example 2:

// // // // // // // // // Input: intervals = [[1,4],[4,5]]
// // // // // // // // // Output: [[1,5]]
// // // // // // // // // Explanation: Intervals [1,4] 
// // // // // // // // /**
// // // // // // // //  * @param {number[][]} intervals
// // // // // // // //  * @return {number[][]}
// // // // // // // //  */
// // // // // // // // var merge = function(intervals) {
// // // // // // // //     // Edge case: if array is empty or has only one interval
// // // // // // // //     if (intervals.length <= 1) {
// // // // // // // //         return intervals;
// // // // // // // //     }
    
// // // // // // // //     // Sort intervals by start time
// // // // // // // //     intervals.sort((a, b) => a[0] - b[0]);
    
// // // // // // // //     const merged = [];
    
// // // // // // // //     // Add first interval to result
// // // // // // // //     merged.push(intervals[0]);
    
// // // // // // // //     // Iterate through remaining intervals
// // // // // // // //     for (let i = 1; i < intervals.length; i++) {
// // // // // // // //         const current = intervals[i];
// // // // // // // //         const lastMerged = merged[merged.length - 1];
        
// // // // // // // //         // Check if current interval overlaps with last merged interval
// // // // // // // //         if (current[0] <= lastMerged[1]) {
// // // // // // // //             // Overlap exists, merge by updating end time
// // // // // // // //             lastMerged[1] = Math.max(lastMerged[1], current[1]);
// // // // // // // //         } else {
// // // // // // // //             // No overlap, add current interval to result
// // // // // // // //             merged.push(current);
// // // // // // // //         }
// // // // // // // //     }
    
// // // // // // // //     return merged;
// // // // // // // // };

// // // // // // // // // Alternative ES6+ approach using reduce
// // // // // // // // var mergeAlternative = function(intervals) {
// // // // // // // //     if (intervals.length <= 1) return intervals;
    
// // // // // // // //     // Sort intervals by start time
// // // // // // // //     intervals.sort((a, b) => a[0] - b[0]);
    
// // // // // // // //     return intervals.reduce((merged, current) => {
// // // // // // // //         const lastMerged = merged[merged.length - 1];
        
// // // // // // // //         // If merged is empty or no overlap, add current interval
// // // // // // // //         if (!lastMerged || current[0] > lastMerged[1]) {
// // // // // // // //             merged.push(current);
// // // // // // // //         } else {
// // // // // // // //             // Overlap exists, merge intervals
// // // // // // // //             lastMerged[1] = Math.max(lastMerged[1], current[1]);
// // // // // // // //         }
        
// // // // // // // //         return merged;
// // // // // // // //     }, []);
// // // // // // // // };

// // // // // // // // // Test cases
// // // // // // // // console.log("Test 1:", merge([[1,3],[2,6],[8,10],[15,18]]));
// // // // // // // // // Expected: [[1,6],[8,10],[15,18]]

// // // // // // // // console.log("Test 2:", merge([[1,4],[4,5]]));
// // // // // // // // // Expected: [[1,5]]

// // // // // // // // console.log("Test 3:", merge([[1,4],[0,4]]));
// // // // // // // // // Expected: [[0,4]]

// // // // // // // // console.log("Test 4:", merge([[1,4],[2,3]]));
// // // // // // // // // Expected: [[1,4]]

// // // // // // // // // Using alternative approach
// // // // // // // // console.log("Alternative Test 1:", mergeAlternative([[1,3],[2,6],[8,10],[15,18]]));
// // // // // // // // // Expected: [[1,6],[8,10],[15,18]]
// // // // // // // Easy
// // // // // // // Topics
// // // // // // // premium lock icon
// // // // // // // Companies
// // // // // // // A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// // // // // // // Given a string s, return true if it is a palindrome, or false otherwise.

 

// // // // // // // Example 1:

// // // // // // // Input: s = "A man, a plan, a canal: Panama"
// // // // // // // Output: true
// // // // // // // Explanation: "amanaplanacanalpanama" is a palindrome.
// // // // // // // Example 2:

// // // // // // // Input: s = "race a car"
// // // // // // // Output: false
// // // // // // // Explanation: "raceacar" is not a palindrome.
// // // // // // // Example 3:

// // // // // // // Input: s = " "
// // // // // // // Output: true
// // // // // // // Explanation: s is an empty string "" after removing non-alphanumeric characters.
// // // // // // // Since an empty string reads the same forward and backward, it is a palindrome.
// // // // // // function isPalindrome(s) {
// // // // // //   // Remove non-alphanumeric characters and convert to lowercase
// // // // // //   const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

// // // // // //   // Reverse the cleaned string and compare
// // // // // //   const reversed = cleaned.split('').reverse().join('');
// // // // // //   return cleaned === reversed;
// // // // // // }

// // // // // // // Examples:
// // // // // // console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// // // // // // console.log(isPalindrome("race a car")); // false
// // // // // // console.log(isPalindrome(" ")); // true
// // // // // public class Solution {
// // // // //     public boolean isPalindrome(String s) {
// // // // //         // Remove non-alphanumeric characters and convert to lowercase
// // // // //         String cleaned = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

// // // // //         int left = 0;
// // // // //         int right = cleaned.length() - 1;

// // // // //         while (left < right) {
// // // // //             if (cleaned.charAt(left) != cleaned.charAt(right)) {
// // // // //                 return false;
// // // // //             }
// // // // //             left++;
// // // // //             right--;
// // // // //         }

// // // // //         return true;
// // // // //     }
// // // // // }
// // // // Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// // // // Example 1:

// // // // Input: s = "aba"
// // // // Output: true
// // // // Example 2:

// // // // Input: s = "abca"
// // // // Output: true
// // // // Explanation: You could delete the character 'c'.
// // // // Example 3:

// // // // Input: s = "abc"
// // // // Output: false
 

// // // // Constraints:

// // // // 1 <= s.length <= 105
// // // // s consists of lowercase English letters.
// // // public class Solution {
// // //     public boolean validPalindrome(String s) {
// // //         int left = 0, right = s.length() - 1;

// // //         while (left < right) {
// // //             if (s.charAt(left) != s.charAt(right)) {
// // //                 return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
// // //             }
// // //             left++;
// // //             right--;
// // //         }

// // //         return true;
// // //     }

// // //     private boolean isPalindrome(String s, int left, int right) {
// // //         while (left < right) {
// // //             if (s.charAt(left) != s.charAt(right)) return false;
// // //             left++;
// // //             right--;
// // //         }
// // //         return true;
// // //     }
// // // }
// // /**
// //  * Definition for singly-linked list.
// //  * function ListNode(val, next) {
// //  *     this.val = (val===undefined ? 0 : val)
// //  *     this.next = (next===undefined ? null : next)
// //  * }
// //  */
// // /**
// //  * @param {ListNode} l1
// //  * @param {ListNode} l2
// //  * @return {ListNode}
// //  */
// // // Definition for singly-linked list.
// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }

// // function addTwoNumbers(l1, l2) {
// //   let dummyHead = new ListNode(0);
// //   let current = dummyHead;
// //   let carry = 0;

// //   while (l1 !== null || l2 !== null || carry !== 0) {
// //     let val1 = l1 ? l1.val : 0;
// //     let val2 = l2 ? l2.val : 0;
// //     let sum = val1 + val2 + carry;

// //     carry = Math.floor(sum / 10);
// //     current.next = new ListNode(sum % 10);
// //     current = current.next;

// //     if (l1) l1 = l1.next;
// //     if (l2) l2 = l2.next;
// //   }

// //   return dummyHead.next;
// // }
// var isPalindrome = function(x) {
//     // Negative numbers or numbers ending in 0 (but not 0 itself) can't be palindrome
//     if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

//     let reversed = 0;
//     while (x > reversed) {
//         reversed = reversed * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }

//     // For even digit numbers, x === reversed
//     // For odd digit numbers, x === Math.floor(reversed / 10)
//     return x === reversed || x === Math.floor(reversed / 10);
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let max = 0;
    let current = 0;
    for(let i= 0;i<nums.length;i++){
        while(seen.has(nums[i])){
            seen.delete(nums[left]);
            current -= nums[left] ;
            left ++;
        }
        seen.add(nums[i]);
        current += nums[i];
        max = Math.max(max,current);
    }
    return max;
};

// //  -----GREEDY-----question-1 class Soultion{
// //     public int profit(int[] prices){
// //         int max_value = 0;
// //         for(let i =1; i < prices.length;i++){
// //             if(prices[i]>prices[i-1]){
// //                 max_value += prices[i] + prices[i-1];
// //             }
// //         }
// //      return max_value;
// //     }
    
// // }
// // question-2 
// // class Solution {
// //     public int maxProfit(int[] prices) {
// //         int buy1 = Integer.MIN_VALUE;
// //         int sell1 = 0;
// //         int buy2 = Integer.MIN_VALUE;
// //         int sell2 = 0;
        
// //          for(int price : prices){
// //             buy1 = Math.max(buy1,-price);
// //             sell1 = Math.max(sell1, buy1 + price);
// //             buy2 = Math.max(buy2, sell1 - price);
// //             sell2 = Math.max(sell2, buy2 + price);
// //              }
// //              return sell2;
// //          }
      
        
// //     }
// public class Solution {
//     public int maxProfit(int k, int[] prices) {
//         int n = prices.length;
//         if (n == 0 || k == 0) return 0;

//         // Quick case: Unlimited transactions allowed
//         if (k >= n / 2) {
//             int profit = 0;
//             for (int i = 1; i < n; i++) {
//                 profit += Math.abs(prices[i] - prices[i - 1]);
//             }
//             return profit;
//         }

//         int[][] dp = new int[k + 1][n];

//         for (int t = 1; t <= k; t++) {
//             int maxNormalDiff = -prices[0];   // For normal transactions
//             int maxShortDiff = prices[0];     // For short-selling

//             for (int d = 1; d < n; d++) {
//                 dp[t][d] = Math.max(
//                     dp[t][d - 1],                           // Skip today
//                     Math.max(
//                         prices[d] + maxNormalDiff,          // Normal sell
//                         -prices[d] + maxShortDiff           // Short-sell
//                     )
//                 );

//                 maxNormalDiff = Math.max(maxNormalDiff, dp[t - 1][d] - prices[d]);
//                 maxShortDiff = Math.max(maxShortDiff, dp[t - 1][d] + prices[d]);
//             }
//         }

//         return dp[k][n - 1];
//     }
// }



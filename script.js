/* Question-1

122. Best Time to Buy and Sell Stock II
Medium
Topics
premium lock icon
Companies
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

soultion-1 in javascript
var function profit(profits){
let max_profit = 0;
for(let i =1; i<profits.length;i++){
if(profits[i]>profits[i-1]){
max_profit+= profit[i]+profit[i-1]}
}
return max_profit;
}



*/
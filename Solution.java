// // // // // // //  -----GREEDY-----question-1 class Soultion{
// // // // // // //     public int profit(int[] prices){
// // // // // // //         int max_value = 0;
// // // // // // //         for(let i =1; i < prices.length;i++){
// // // // // // //             if(prices[i]>prices[i-1]){
// // // // // // //                 max_value += prices[i] + prices[i-1];
// // // // // // //             }
// // // // // // //         }
// // // // // // //      return max_value;
// // // // // // //     }
    
// // // // // // // }
// // // // // // // question-2 
// // // // // // // class Solution {
// // // // // // //     public int maxProfit(int[] prices) {
// // // // // // //         int buy1 = Integer.MIN_VALUE;
// // // // // // //         int sell1 = 0;
// // // // // // //         int buy2 = Integer.MIN_VALUE;
// // // // // // //         int sell2 = 0;
        
// // // // // // //          for(int price : prices){
// // // // // // //             buy1 = Math.max(buy1,-price);
// // // // // // //             sell1 = Math.max(sell1, buy1 + price);
// // // // // // //             buy2 = Math.max(buy2, sell1 - price);
// // // // // // //             sell2 = Math.max(sell2, buy2 + price);
// // // // // // //              }
// // // // // // //              return sell2;
// // // // // // //          }
      
        
// // // // // // //     }
// // // // // // public class Solution {
// // // // // //     public int maxProfit(int k, int[] prices) {
// // // // // //         int n = prices.length;
// // // // // //         if (n == 0 || k == 0) return 0;

// // // // // //         // Quick case: Unlimited transactions allowed
// // // // // //         if (k >= n / 2) {
// // // // // //             int profit = 0;
// // // // // //             for (int i = 1; i < n; i++) {
// // // // // //                 profit += Math.abs(prices[i] - prices[i - 1]);
// // // // // //             }
// // // // // //             return profit;
// // // // // //         }

// // // // // //         int[][] dp = new int[k + 1][n];

// // // // // //         for (int t = 1; t <= k; t++) {
// // // // // //             int maxNormalDiff = -prices[0];   // For normal transactions
// // // // // //             int maxShortDiff = prices[0];     // For short-selling

// // // // // //             for (int d = 1; d < n; d++) {
// // // // // //                 dp[t][d] = Math.max(
// // // // // //                     dp[t][d - 1],                           // Skip today
// // // // // //                     Math.max(
// // // // // //                         prices[d] + maxNormalDiff,          // Normal sell
// // // // // //                         -prices[d] + maxShortDiff           // Short-sell
// // // // // //                     )
// // // // // //                 );

// // // // // //                 maxNormalDiff = Math.max(maxNormalDiff, dp[t - 1][d] - prices[d]);
// // // // // //                 maxShortDiff = Math.max(maxShortDiff, dp[t - 1][d] + prices[d]);
// // // // // //             }
// // // // // //         }

// // // // // //         return dp[k][n - 1];
// // // // // //     }
// // // // // // }
// // // // // lettcode - 277
// // // // // class Solution {
// // // // //     public boolean containsDuplicate(int[] nums) {
// // // // //       HashSet<Integer> seen = new HashSet<>();
// // // // //       for(int num:nums){
// // // // //         if(seen.contains(num)){
// // // // //             return true;
// // // // //         }
// // // // //         seen.add(num);
// // // // //       }
// // // // //       return false;
// // // // //     }
// // // // // }
// // // // leet code-219
// // // // class Solution {
// // // //     public boolean containsNearbyDuplicate(int[] nums, int k) {
// // // //         HashMap<Integer,Integer> map = new HashMap<>();
// // // //         for(int i = 0;i<nums.length;i++){
// // // //             if(map.containsKey(nums[i])){
// // // //                 int preIndex = map.get(nums[i]);
// // // //                 if(i - preIndex <= k){
// // // //                     return true;
// // // //                 }

// // // //             }
// // // //             map.put(nums[i],i);
// // // //         }
// // // //         return false;
        
// // // //     }
// // // // }
// // // import java.util.HashMap;
// // // import java.util.Map;

// // // public class Solution {
// // //     public boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
// // //         if (valueDiff < 0) return false;

// // //         Map<Long, Long> buckets = new HashMap<>();
// // //         long size = (long) valueDiff + 1;

// // //         for (int i = 0; i < nums.length; i++) {
// // //             long num = (long) nums[i];
// // //             long bucketId = getBucketId(num, size);

// // //             // Same bucket
// // //             if (buckets.containsKey(bucketId)) {
// // //                 return true;
// // //             }

// // //             // Neighboring buckets
// // //             if (
// // //                 buckets.containsKey(bucketId - 1) && Math.abs(num - buckets.get(bucketId - 1)) <= valueDiff ||
// // //                 buckets.containsKey(bucketId + 1) && Math.abs(num - buckets.get(bucketId + 1)) <= valueDiff
// // //             ) {
// // //                 return true;
// // //             }

// // //             // Add to bucket
// // //             buckets.put(bucketId, num);

// // //             // Remove old bucket outside indexDiff
// // //             if (i >= indexDiff) {
// // //                 long oldBucketId = getBucketId((long) nums[i - indexDiff], size);
// // //                 buckets.remove(oldBucketId);
// // //             }
// // //         }

// // //         return false;
// // //     }

// // //     private long getBucketId(long num, long size) {
// // //         if (num >= 0) {
// // //             return num / size;
// // //         } else {
// // //             return ((num + 1) / size) - 1;
// // //         }
// // //     }
// // // }
// // import java.util.*;

// // class Solution {
// //     public int[][] merge(int[][] intervals) {
// //         // Edge case: if array is empty or has only one interval
// //         if (intervals.length <= 1) {
// //             return intervals;
// //         }
        
// //         // Sort intervals by start time
// //         Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        
// //         List<int[]> merged = new ArrayList<>();
        
// //         // Add first interval to result
// //         merged.add(intervals[0]);
        
// //         // Iterate through remaining intervals
// //         for (int i = 1; i < intervals.length; i++) {
// //             int[] current = intervals[i];
// //             int[] lastMerged = merged.get(merged.size() - 1);
            
// //             // Check if current interval overlaps with last merged interval
// //             if (current[0] <= lastMerged[1]) {
// //                 // Overlap exists, merge by updating end time
// //                 lastMerged[1] = Math.max(lastMerged[1], current[1]);
// //             } else {
// //                 // No overlap, add current interval to result
// //                 merged.add(current);
// //             }
// //         }
        
// //         // Convert List to array
// //         return merged.toArray(new int[merged.size()][]);
// //     }
    
// //     // Test method
// //     public static void main(String[] args) {
// //         Solution solution = new Solution();
        
// //         // Test case 1
// //         int[][] intervals1 = {{1,3},{2,6},{8,10},{15,18}};
// //         int[][] result1 = solution.merge(intervals1);
// //         System.out.println("Test 1: " + Arrays.deepToString(result1));
// //         // Expected: [[1,6],[8,10],[15,18]]
        
// //         // Test case 2
// //         int[][] intervals2 = {{1,4},{4,5}};
// //         int[][] result2 = solution.merge(intervals2);
// //         System.out.println("Test 2: " + Arrays.deepToString(result2));
// //         // Expected: [[1,5]]
        
// //         // Test case 3: Edge case
// //         int[][] intervals3 = {{1,4},{0,4}};
// //         int[][] result3 = solution.merge(intervals3);
// //         System.out.println("Test 3: " + Arrays.deepToString(result3));
// //         // Expected: [[0,4]]
// //     }
// // }
// public class Solution {
//     public boolean validPalindrome(String s) {
//         int left = 0, right = s.length() - 1;

//         while (left < right) {
//             if (s.charAt(left) != s.charAt(right)) {
//                 return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
//             }
//             left++;
//             right--;
//         }

//         return true;
//     }

//     private boolean isPalindrome(String s, int left, int right) {
//         while (left < right) {
//             if (s.charAt(left) != s.charAt(right)) return false;
//             left++;
//             right--;
//         }
//         return true;
//     }
// }


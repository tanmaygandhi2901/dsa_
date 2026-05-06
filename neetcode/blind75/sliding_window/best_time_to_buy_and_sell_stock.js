// runtime - 25ms(45.99%), memory - 9.9MB(56.73%)
// IMP - will come back onto this problem post learning DP. 
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0, r = l+1;
        
        while(r < prices.length) {
            if(prices[r] > prices[l]) {
                maxProfit = Math.max(maxProfit, (prices[r] - prices[l]));
            } else {
                l = r;
            }
            r++;
        }

        return maxProfit;
    }
}

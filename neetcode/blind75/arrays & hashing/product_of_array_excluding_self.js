//3 arrays approach 
// runtime - 23ms(99.67%), memory - 11.1MB(53.34%)
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];

        let prefixProd = [];
        prefixProd[0] = 1; 

        for(let i=1; i<nums.length; i++) {
            prefixProd[i] = prefixProd[i - 1] * nums[i - 1];
        } 

        let suffixProd = new Array(nums.length).fill(1);
        suffixProd[nums.length - 1] = 1;
        for(let j=nums.length - 2; j >=0; j--) {
            suffixProd[j] = suffixProd[j + 1] * nums[j + 1];
        }

        for(let k=0;k<nums.length; k++) {
            result[k] = prefixProd[k] * suffixProd[k];
        }
        
        return result;

    }
}


//optmised in terms of memory 
//runtime - 25ms(79.50%), memory - 10.8MB(83.51%)
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];

        let prefix = 1;

        for(let i=0; i<nums.length; i++) {
            result[i] = prefix;
            prefix *=nums[i];
        } 

        let suffix = 1;
        for(let j=nums.length - 1; j >=0; j--) {
            result[j] *=suffix;
            suffix *= nums[j];
        }

        return result;
    }
}

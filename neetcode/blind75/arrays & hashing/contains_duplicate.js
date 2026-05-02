//through sorting and array 
// runtime -    24ms, memory - 10.1MB

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums = nums.sort((a, b) => a - b);

        for(let i=1; i<nums.length; i++) {
            if(nums[i] == nums[i-1]) {
                return true;
            }
        }

        return false;
    }
}


// through set
// Runtime - 22ms, Memory - 9.6MB

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for(let i = 0; i<nums.length; i++) {
            if(set.has(nums[i])) {
                return true;
            } else {
                set.add(nums[i])
            }
        }

        return false;
    }
}

// map solution
//runtime - 22ms(97.51), memory - 10.3MB(84.03%)
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i=0; i<nums.length; i++) {
            if(map.has((target - nums[i]))) {
                return [map.get((target - nums[i])), i];
            } else {
                map.set(nums[i], i);
            }
        }

        return [];
    }
}

//note - if we didn't had to return indices - set is better or sorting and then use two pointers. 
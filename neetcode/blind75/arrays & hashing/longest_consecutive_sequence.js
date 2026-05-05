
//runtime - 22ms(99.64%), memory - 10.2MB(100%)
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b) => a-b);
        nums = nums.filter((v, i) => v !== nums[i - 1]);
        if(nums.length == 1) return 1;
        let l=0, r =l+1, len = nums.length;
        let maxVal = 0;

        while(r<len) {
            if(nums[r-1] != (nums[r] - 1)) {
                l = r;
            }
            maxVal = Math.max(maxVal, (r - l + 1));
            r++;
        }

        return maxVal;
    }
}


//another approach
//runtime -24ms(80.12%) , memory - 9.7MB(100%)
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }
        nums.sort((a, b) => a - b);

        let res = 0,
            curr = nums[0],
            streak = 0,
            i = 0;

        while (i < nums.length) {
            if (curr !== nums[i]) {
                curr = nums[i];
                streak = 0;
            }
            while (i < nums.length && nums[i] === curr) {
                i++;
            }
            streak++;
            curr++; // this is imp - it increases the value by 1, to match the logic. 
            res = Math.max(res, streak);
        }
        return res;
    }
}

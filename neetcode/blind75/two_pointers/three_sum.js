// i tried to overcomplicate this solution using this below solution (not completed: because to keep it unique, i had to use another set)
// i still don't know why I overcomplicated this
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a -b);

        let output = [];
        let set = new Set();

        for(let i=0;i<nums.length;i++) {
            for(let j=i+1;j<nums.length;j++) {
                let target = -(nums[i] + nums[j]);
                if(set.has(target)) {
                    output.push([nums[i], nums[j], target]);
                    set.delete(target);
                } else {
                    set.add(nums[j]);
                }
            }
            set.clear();
        }

        return output;
    }
}


//easy and basic
//runtime - 45ms(100%), memory - 14.3MB(96.30%)
class Solution {
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {

            // skip duplicate i
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]]);

                    // skip duplicates for l
                    while (l < r && nums[l] === nums[l + 1]) l++;

                    // skip duplicates for r
                    while (l < r && nums[r] === nums[r - 1]) r--;

                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }

        return res;
    }
}
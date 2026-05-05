//runtime - 22ms(98.60%)
//memory - 10.1MB(99.93%)

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l =0, r = heights.length - 1;

        let output = -1;

        while(l < r) {
            output = Math.max(output, (r - l) * Math.min(heights[l], heights[r]));
            if(heights[l] > heights[r]) {
                r--;
            } else {
                l++
            }
        }

        return output;
    }
}

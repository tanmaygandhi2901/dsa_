
//runtime - 23ms(100%), memory - 10.3MB(89.71%)
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();

        let l = 0, r = 0, len = s.length;
        let maxLen = 0;

        while(r<len) {
            while(l < r && set.has(s[r])) {
                set.delete(s[l]);
                l++
            }

            set.add(s[r]);

            maxLen = Math.max(maxLen, (r-l+1));
            r++;
        }

        return maxLen;
    }
}

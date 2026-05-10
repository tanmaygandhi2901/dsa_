//runtime - 25ms(81.58%), memory - 9.8Mb(95.52%)

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0, l = 0, r = 0, maxFreq = 0;
        let map = new Map()

        for(let r=0;r<s.length;r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(s[r]));

            while(r-l+1-maxFreq > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }

            max = Math.max(max, r-l+1);
        }


        return max;
    }
}

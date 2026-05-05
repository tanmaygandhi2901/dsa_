//runtime - 23ms(79.44%), memory - 9.8MB(89%)
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let l =0, r = s.length -1;

        while ( l < r ) {
            if(s[l] != s[r]) {
                return false;
            } else {
                l++;
                r--;
            }
        }

        return true;
    }
}
// efficient approach -
//runtime - 35ms(99.67%),memory - 13.8MB(70.01%)

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length == 1) {
            return [strs];
        }
        // this above if statement increased the memory but reduced the runtime.
        let res = {};

        for(let s of strs) {
            let count = new Array(26).fill(0);

            for(let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            };

            let key = count.join("-");

            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }

        return Object.values(res);

    }
}

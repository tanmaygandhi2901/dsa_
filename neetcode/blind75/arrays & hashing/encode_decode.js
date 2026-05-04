//runtime - 25ms(90.07%), memory - 10.8MB(82.11%)

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for(let str of strs) {
            res += str.length + '#' + str
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let l = 0;
        while(l < str.length) {
            let count = l;
            while(str[count] != '#') {
                count++;
            }

            let length = parseInt(str.substring(l, count));
            l = count + 1;
            count = l + length;
            res.push(str.substring(l, count));
            l = count;
        }

        return res;
    }
}

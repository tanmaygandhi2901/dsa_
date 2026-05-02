// using map (for frequency) - 
//runtime-31ms(beats 100%), memory-11.4MB(beats 90.06%)

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const smap = new Map();
        const tmap = new Map();

        if(s.length != t.length) {
            return false;
        }

        for(let i=0; i<s.length; i++) {
            if(!smap.get(s[i])) {
                smap.set(s[i], 1)
            } else {
                smap.set(s[i], smap.get(s[i]) + 1)
            }

            if(!tmap.get(t[i])) {
                tmap.set(t[i], 1)
            } else {
                tmap.set(t[i], tmap.get(t[i]) + 1)
            }
        }

        if(smap.size != tmap.size) {
            return false
        }

        for (const [key, value] of smap) {
            if(value != tmap.get(key)) {
                return false;
            }
        }

        return true;

    }
}


//through array frequency - efficient approach
//runtime-25ms(beats 100%), memory-11.2MB(beats 99.61%)
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length) {
            return false;
        }

        const freq = new Array(26).fill(0);

        for(let i=0; i<s.length; i++) {
            freq[s.charCodeAt(i) - 97]++;
            freq[t.charCodeAt(i) - 97]--;
        }

        for (let count of freq) {
            if (count !== 0) return false;
        }

        return true;

    }
}

//map solution - can be optimised more 
//runtime - 33ms(20.38%), memory - 10.6MB(98.64%)

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let num of nums) {
            if(!map.has(num)) {
                map.set(num, 1)
            } else {
                map.set(num, map.get(num) + 1);
            }
        }

        return [...map.entries()].sort((a,b) => a[1] -b[1]).slice(-k).map(entry => entry[0]);
    }
}



//bucket-sort algo
//runtime - 23ms(95.23%), memory - 10.8MB(81.08%) 

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for(let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        };

        let buckets = new Array(nums.length + 1).fill().map(() => []);

        for(let [num, freq] of freqMap.entries()) {
            buckets[freq].push(num);
        };

        let result = [];

        for(let i=buckets.length - 1; i >= 0 && result.length < k; i--) {
            for(let num of buckets[i]) {
                result.push(num);
                if(result.length == k) break;
            }
        }

        return result;
    }
}

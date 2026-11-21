class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj={};
        for(let num of nums){
            obj[num]=obj[num]?obj[num]+1:1;
        }
        for(let key in obj){
            if(obj[key]>(nums.length)/2) return key
        }
    }
}

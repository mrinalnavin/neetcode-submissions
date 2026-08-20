class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap={}
        for(let i=0;i<nums.length;i++){
            if(hashMap[nums[i]]===1) return true;
            hashMap[nums[i]]=1
        }
        return false;
    }
}

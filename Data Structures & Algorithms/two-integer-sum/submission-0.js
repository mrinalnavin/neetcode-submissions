class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for(let i=0;i<nums.length;i++){
            if(map[nums[i]]!==undefined){
                return [i,map[nums[i]]]
            }
            map[target-nums[i]]=i
        }
    }
}

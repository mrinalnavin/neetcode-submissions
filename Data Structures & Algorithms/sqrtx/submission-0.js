class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x===0 || x===1) return x;
        let start=0;
        let end = x;
        while(start<=end){
            let mid = Math.floor((start+end)/2);
            if(mid*mid===x) return mid;
            else if(mid*mid<x){
                start=mid+1;
            }
            else{
                end=mid-1;
            }
        }
        return start-1;
    }
}

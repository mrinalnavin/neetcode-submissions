class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let i=0;
        let temp=""
        for(let k=s.length-1;i<k;){
            temp=s[k];
            s[k]=s[i];
            s[i]=temp;
            i++;
            k--;
        }
    }
}

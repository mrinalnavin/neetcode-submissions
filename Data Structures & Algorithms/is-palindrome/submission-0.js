class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let i=0;
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
       for(let k=s.length-1;i<k;){
        if(s[i]!==s[k]) return false;
        i++;
        k--;
       } 
       return true;
    }
}

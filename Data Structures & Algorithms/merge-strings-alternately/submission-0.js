class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let len1 = word1.length;
        let len2 = word2.length;
        let i=0;
        let j=0;
        let mergedString="";
        while(i<len1 || j<len2){
            if(i<len1 && j<len2){
                 mergedString+=word1[i]+word2[j];
                 i++;
                 j++;
            }
            else if(i<len1){
                mergedString+=word1[i];
                i++
            }
            else{
                mergedString+=word2[j];
                j++;
            }
           
        }
        return mergedString;
    }
}

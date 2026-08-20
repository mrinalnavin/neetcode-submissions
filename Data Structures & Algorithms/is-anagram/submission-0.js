class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = {};
        let map2 = {};
        if(s.length!=t.length) return false;
        for(let i=0;i<s.length;i++){
            map1[s[i]]=map1[s[i]]?map1[s[i]]+1:1;
        }
        for(let i=0;i<t.length;i++){
            map2[t[i]]=map2[t[i]]?map2[t[i]]+1:1;
        }
        for(let key in map1){
            if(map1[key]!==map2[key]) return false;
            map1[key]--;
            map2[key]--;
        }
        return true;
    }
}

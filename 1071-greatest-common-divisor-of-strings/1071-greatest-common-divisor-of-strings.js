/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
   if(str1+str2 != str2+str1) return ''
   let gcd = function(x ,y){
       if(!y) return x;
       else 
       return gcd(y , x%y)
   }
    let val = gcd( str1.length, str2.length)

    return str1.slice(0, val)

};
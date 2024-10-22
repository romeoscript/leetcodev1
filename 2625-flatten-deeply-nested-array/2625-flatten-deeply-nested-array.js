/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = []
     function helper(arr, depth){
         for(const val of arr){
             if(typeof val === 'object' && depth < n){
                 helper(val, depth + 1)
             } else{
                 result.push(val)
             }
         }
         return result

     }
    
    return helper(arr, 0)

};
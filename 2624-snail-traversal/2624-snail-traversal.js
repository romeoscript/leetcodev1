/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
     if (rowsCount * colsCount !== this.length) return [];
    const arr = this
    let index = 0
    const matrix = Array.from({length:rowsCount}, () => Array(colsCount).fill(0))
    
    for(let col = 0; col < colsCount; col++){
        if(col % 2 === 0){
            for(let row = 0; row < rowsCount; row++){
                matrix[row][col] = arr[index++]
            }
        } else{
            for(let row = rowsCount -1; row >= 0; row--){
                matrix[row][col] = arr[index++]
            }
        }
    }
    return matrix
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
const firstAndLastAverage = (arr) => {
  let sum = arr[0] + arr[arr.length-1]
  let average = sum/2
  if(arr.length <= 1){
    return null
  } else if( arr.length >= 2){
    return average
  }
 
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
const duplicateArray = (arr) => {
  let dupArray = []
  for(let i=0; i < arr.length; i++){
    dupArray.push(arr[i])
  }
  return [...arr,...dupArray]
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
const removeFirstThreeElements = (arr) => {
  if(arr.length < 4){
    arr.pop()
    arr.shift
  }
  arr.splice(0,3)
  return arr
}


module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

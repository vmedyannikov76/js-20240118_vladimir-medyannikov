/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr) {return [];}
  if (!arr.length) return [];
  const newArr = new Set();
  arr.forEach(element => {
    newArr.add(element);
  });
  return Array.from(newArr)
}


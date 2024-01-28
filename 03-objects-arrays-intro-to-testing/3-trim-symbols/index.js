/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let newStr = '';
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    let test = string[i];
    newStr.at(-1) === test ? count++ : count = 1;
    if (count > size) {
      continue;
    }
    newStr += string[i];
  }
  return newStr;
}

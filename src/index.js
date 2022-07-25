
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  const res = matrix.map((item, index) => index % 2 ? item.reverse() : item).reduce((acc, item) => acc.concat(item), [])
  return res;
}

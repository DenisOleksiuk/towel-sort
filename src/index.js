module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length < 1) return []
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      arr.push(matrix[i].reverse());
    } else {
      arr.push(matrix[i]);
    }
  }
  const res = arr.reduce((per, curr) => {
    return [...per, ...curr]
  });
  return res
}
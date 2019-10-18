function solve ({ a, replace }) {
  let pushable
  let min = a
  for(let i=(a+"").length;i--;) {
    for (let j=(a+"").length;j--;) {
      pushable = (a+"").split("").map((char, index) => {
        if ((index < i) || (index > j)) {
          return char - 0;
        } else {
          return replace(char) - 0;
        }
      }).join("")

      if (pushable < min) {
        min = pushable
      }
    }
  }
  return min
}
module.exports = solve;

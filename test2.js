// module.exports = function(input) {
//
// }

function changeInput(input) {
  let answer = input.replace('-', '/').replace('_', '/').split("/")
  if (answer.length > 4) {
    let lastChanged = answer[answer.length - 1].split('?')
    answer.pop()
    answer = answer.concat(lastChanged)
    console.log(answer[3])
    console.log(answer[4]);
    [answer[3], answer[4]] = [answer[4], answer[3]]
    lastElements = []
    lastElements.push(answer[answer.length-1])
    answer.pop()
    lastElements.push(answer[answer.length-1])
    answer.pop()
    lastElements = lastElements.reverse().join("?")
    console.log(lastElements)
    console.log(answer.push(lastElements))
  }
  return answer.join("/")
}


console.log(changeInput('/sails-111/333_ball?a=1&b=2'))
console.log(changeInput('/projectName-subproject/entityName?a=1&b=2'))
// /sails/111/ball/333?a=1&b=2
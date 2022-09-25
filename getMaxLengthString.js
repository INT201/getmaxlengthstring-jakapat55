const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if (arrayOfString === null||arrayOfString === undefined)
    return undefined 

    let Max = [arrayOfString[0]]
    for (let i = 1; i < arrayOfString.length; i++){
      if (arrayOfString[i].length > Max[0].length)
      Max = [arrayOfString[i]]
      else if (arrayOfString[i].length === Max[0].length)
      Max.push(arrayOfString[i])  
    }
    return Max
}
  

module.exports = getMaxLengthString

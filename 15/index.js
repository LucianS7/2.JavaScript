function generateSentence(desc, arr) {
  let arrayItems = arr.slice(0, -1).join(", ")
  arrayItems += ` and ${arr[arr.length-1]}`
  const sentence = `The ${arr.length} ${desc} are ${arrayItems}`
  console.log(sentence)
}

generateSentence("best fruits", ["Apples", "Oranges", "Bananas", "Rasberry", "Blueberry"])
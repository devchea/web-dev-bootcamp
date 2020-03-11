//function that accepts two parameters and return a string with persons' position
function takeANumber(newLine, newName) {
  if (newLine.length > 0);
  newLine.push(newName);//updating array
  return `Welcome, ${newName}. You are number ${newLine.length} in line.`//return the string with name and place in line
}

//function that accepts current line of people and return the first person in line then remove that person from the line. If nobody is in line then return a string.
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) { //looks at the length of katzDeliLine to see what string to return
    return `There is nobody waiting to be served!` //return this string if katzDeliLine length === 0
  } else {
    return `Currently serving ${katzDeliLine.shift()}.` //return the first person in line and remove that person from the line
  }
}

//function that accepts current line of people and returns current line as a string
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) { //looks at the length of katzDeliLine to see what string to return
    return "The line is currently empty."//return this string if katzDeliLine length === 0
  }
    var newArray = []; //assign newArray as an array
    for (var i = 0; i < katzDeliLine.length; i++) { //counter to check katzDeliLine.length
      newArray.push (`${i+1}. ${katzDeliLine[i]}`); //push the line place number and name to newArray
  }
  return `The line is currently: ${newArray.join(", ")}`; //return string and uses a space as the separator
}

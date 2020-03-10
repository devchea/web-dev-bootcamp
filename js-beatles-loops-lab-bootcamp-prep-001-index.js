function theBeatlesPlay(musicians, instruments){
  var newarray = [];
  for (var i = 0; i < musicians.length; i++) {
    newarray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newarray
}

//function johnLennonFacts
function johnLennonFacts(facts){
  //declare counter
  var i = 0;
  //declare newarray
  var newarray = [];
  //while loop
  while (i < facts.length) {
    //loop and add "!!!"
    newarray[i] = `${facts[i]}!!!`
    i++;
  }
  return newarray;
}

//function iLoveTheBeatles
function iLoveTheBeatles(number){
  //create var that stores empty array and add counter
  var newarray = [];
  var i = 0;
  //do-while loop adding "I love the Beatles!" to empty array
  do {
    newarray.push(`I love the Beatles!`);
    i++
  } while (i < 15-number);
  return newarray;
}

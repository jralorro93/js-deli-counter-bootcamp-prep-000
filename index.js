var katzDeliCounter = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
    if (line.length === 0) {
      return "There is nobody waiting to be served!";
    }
    else {
      return `Currently serving ${line.shift()}.`;     
    }
}

function currentLine(line) {
  var katzDeliLine = [];
  let i = 0;
  while ( i < line.length) {
    katzDeliLine.push(` ` +[i +1] + `. ` + line[i]);
    i++;
    console.log(katzDeliLine);
        
  }
	if (line.length === 0){
    return "The line is currently empty.";
    } 
  else {
    return "The line is currently:" + katzDeliLine;
    }
}





function takeANumber(line){
  
}


takeANumber(line) // "Welcome! You're ticket number #1" [1]
takeANumber(line) // "Welcome! You're ticket number #2" [1,2]

nowServing(line) // "Currently Serving #1" [2]
nowServing(line) // "Currently Serving #2" []

takeANumber(line) // "Welcome! You're ticket number #3" [3]




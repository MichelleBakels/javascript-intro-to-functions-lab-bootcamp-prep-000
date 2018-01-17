function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  shout = string.toUpperCase()
  console.log(shout)
}

function logWhisper(string){
  whisper = string.toLowerCase()
  console.log(whisper)
}

function sayHiToGrandma(string){
  var lowercase = 'hello!'
  var uppercase = "HELLO!"
  if (lowercase.toLowerCase() === lowercase)
    return "I can't hear you!"
  elseif (uppercase.toUpperCase() === uppercase)
    return "YES INDEED!"
  elseif ('string' === "I love you, Grandma")
    return "I love you, too."
}

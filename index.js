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
  if (string.toLowerCase)
    return "I can't hear you!"
  elseif (string.toUpperCase)
    return "YES INDEED!"
  elseif (string === "I love you, Grandma")
    return "I love you, too."
}

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

  if (whisper)
    return "I can't hear you!"
  elseif (string.toUpperCase())
    return "YES INDEED!"
  else
    return "I love you, too."
}

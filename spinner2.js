

  const sequence = function(char,number) {
    setTimeout(() => {
        process.stdout.write(`\r${char}   `)},number)    
  }
  const spinCharacter = function () {
    let charArray = ["|","/","-","\\","|","/","-","\\"]  
    let delay = 200
    for(let char of charArray) {
    sequence(char,delay)
    delay += 200;
    }
  }
  spinCharacter()

  
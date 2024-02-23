function convertText() {
    const inputText = document.getElementById("inputText").value;
    let convertedText = "";
  
    const replacements = {
      "т": "t",
      "ш": "ş",
      "к": "k",
      "a": "a",
      "л": "l",
      "й": "y",
      "и": "i",
      "ÿ": "u",
      "д": "d",
      "н": "n",
      "у": "u",
      "з": "z",
      "ь": "'",
      "е": "e",
      "o": "o",
    };
  
    for (const char of inputText) {
      const lowerChar = char.toLowerCase(); 
      const replacementChar = replacements[lowerChar] || char;
      convertedText += replacementChar;
    }
  
    document.getElementById("output").textContent = convertedText;
  }
  
window.onload = function() {
    var letterMap = {
        "A": "🙂",
        "B": "🤓",
        "C": "🐒",
        "D": "⛵",
        "E": "🐦",
        "F": "😎",
        "G": "🌲",
        "H": "🐢",
        "I": "🐎",
        "J": "⚽",
        "K": "👑",
        "L": "🐕",
        "M": "🙃",
        "N": "🍓",
        "O": "😍",
        "P": "🎂",
        "Q": "🏵",
        "R": "🐇",
        "S": "🍬",
        "T": "⭐",
        "U": "🏈",
        "V": "😵",
        "W": "🐩",
        "X": "🌻",
        "Y": "🍇",
        "Z": "🚀",
    }
    var encryptButton = document.getElementById('encryptButton');
    encryptButton.addEventListener("click", myFunction);

    function myFunction() {
        var inputText = document.getElementById("data").value;
        var word = inputText.toUpperCase();
        var encrypted = "";
        for (var i = 0; i < word.length; i++) {
            encrypted += letterMap[word[i]] || word[i];
        }

        function clearInput(element) {
            element.value = "";
        }
        document.getElementById("a").innerHTML = encrypted;
    }


    var letterMap1 = {
        "🙂": "A",
        "🤓": "0x1f913",
        "🐒": "C",
        "⛵": "D",
        "🐦": "E",
        "😎": "F",
        "🌲": "G",
        "🐢": "H",
        "🐎": "I",
        "⚽": "J",
        "👑": "K",
        "🐕": "L",
        "🙃": "M",
        "🍓": "N",
        "😍": "O",
        "🎂": "P",
        "🏵": "Q",
        "🐇": "R",
        "🍬": "S",
        "⭐": "T",
        "🏈": "U",
        "😵": "V",
        "🐩": "W",
        "🌻": "X",
        "🍇": "Y",
        "🚀": "Z",
    }

    var decryptButton = document.getElementById('decryptButton');
    decryptButton.addEventListener("click", myFunction1);
    function myFunction1() {
        var inputText = document.getElementById("data1").value;
        inputText = [...inputText];
        var decrypted = "";
        for (var i = 0; i < inputText.length; i++) {
            decrypted += letterMap1[inputText[i]] || inputText[i];
        }
        function clearInput(element) {
            element.value = "";
        }
        document.getElementById("b").innerHTML = decrypted;
    }


    //CUSTOM EMOJI SECTION
    var customEmojiButton = document.getElementById('customEmoji');
    var table = document.querySelector("TABLE");


    customEmojiButton.addEventListener("click",createTable);
    function createTable(){
        for (var i = 0; i < 26; i++) {

          //returns the letters from loop variables A-Z
          var loopLetter = String.fromCodePoint(65+i);

          //create new ROWS for each alphabet and append to table
          var newRow = document.createElement("TR");
          table.append(newRow);

          //first column TD element for of characters
          var alphabet = document.createElement("TD");
          var alphabetText = document.createTextNode(loopLetter);
          alphabet.setAttribute("class", "tableAlphabets");
          alphabet.append(alphabetText);
          newRow.append(alphabet);

          //second column TD element for of current character Mapping
          var currentEmoji = document.createElement("TD");
          currentEmoji.setAttribute("class", "tableEmojis");
          var currentEmojiText = document.createTextNode(letterMap[loopLetter]);
          currentEmoji.append(currentEmojiText);
          newRow.append(currentEmoji);


          //third column TD element for of input of custom characters
          var customEmojiCell = document.createElement("TD");
          customEmojiCell.setAttribute("colspan","2");
          newRow.append(customEmojiCell);

          //third column custom emoji input
          var customEmojiInput = document.createElement("INPUT");
          customEmojiInput.setAttribute("type","text");
          customEmojiInput.setAttribute("class","customEmojiInput");
          customEmojiInput.setAttribute("size","5");
          customEmojiCell.append(customEmojiInput);

          //third column custom emoji button
          var emojiSubmitButton = document.createElement("INPUT");
          emojiSubmitButton.setAttribute("type", "button");
          emojiSubmitButton.setAttribute("class","customEmojiButton");
          emojiSubmitButton.setAttribute("value", "submit");
          customEmojiCell.append(emojiSubmitButton);

        }

        //Now we need to map the new input to current table through this part
        var allCustomEmojiInputs = document.querySelectorAll('.customEmojiInput');
        var allCustomEmojiButtons = document.querySelectorAll('.customEmojiButton');
        var allTableAlphabets = document.querySelectorAll('.tableAlphabets');
        var allTableEmojis = document.querySelectorAll('.tableEmojis');
        for(let i=0; i<26; i++){
          var loopLetter = String.fromCodePoint(65+i);
          allCustomEmojiButtons[i].addEventListener("click", function(){
            letterMap[allTableAlphabets[i].textContent] = allCustomEmojiInputs[i].value;
            allTableEmojis[i].textContent = allCustomEmojiInputs[i].value;
          });
        }
    }
    //CUSTOM EMOJI SECTION ENS HERE

};

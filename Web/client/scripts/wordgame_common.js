function countNumberCharactersCorrect(solution, guess){
   var sum = 0;
   var characters = getFrequency(solution, guess);

   for(var i = 0; i<guess.length; i++){
        var c = guess[i];
        if(characters[c] != null && characters[c] != 0){
            characters[c]--;
            sum++;
        }
   }
   return sum;
};

function countNumberPositionsCorrect(solution, guess){
    var sum = 0;
    for(var i = 0; i < solution.length; i++){
        if(solution[i] === guess[i])
            sum++;
    }
    return sum;
};

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};

function isNonTraditionalRepeating(word){
    var flag = false;
    word = word.toLowerCase();
    dictionary = getFrequency(word);
    var keys = [];
    for (var key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        if(dictionary[key] > 2)
            return true;
        else if(dictionary[key] > 1 && flag){
            return true;
        }

        if(dictionary[key] > 1){
            if(!flag) flag = true;
        }


      }
    }
    return false;
};

function isTraditionalRepeating(word){
    word = word.toLowerCase();
    dictionary = getFrequency(word);
    var keys = [];
    for (var key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        if(dictionary[key] > 1)
            return true;
      }
    }
    return false;
};
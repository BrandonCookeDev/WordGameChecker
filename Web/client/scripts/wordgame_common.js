countNumberCharactersCorrect = function(solution, guess){
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

countNumberPositionsCorrect = function(solution, guess){
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
var app = angular.module("WordGameChecker", []);

app.controller("testCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('wordCheckerCtrl', function($scope){
    $scope.solutionWord  = "";
    $scope.guessWord     = "";
    $scope.solutionChars = null;

    $scope.expectedResults = {
       word: '',
       numCorrect: 0,
       posCorrect: 0
   }

    $scope.results = {
        word: '',
        numCorrect: 0,
        posCorrect: 0
    }

    $scope.submitSolution = function(){
        $scope.solutionWord = $('#solutionTextbox').val().toString().toLowerCase();
        $('#solutionTextbox').val('##########');
        $('#solutionTextbox').attr('disabled', true);
        $scope.solutionChars = getFrequency($scope.solutionWord);

        $scope.expectedResults = {
            word: $scope.solutionWord,
            numCorrect: $scope.solutionWord.length,
            posCorrect: $scope.solutionWord.length
        }
    };

    $scope.submitGuess = function(){

        $scope.guessWord = $('#guessTextbox').val().toString().toLowerCase();
        $('#guessTextbox').val("");

        if($scope.guessWord.length != $scope.solutionWord.length){
            alert('Your word is ' + $scope.guessWord.length + ' long. The Number of characters is ' + $scope.solutionWord.length);
            return;
        }

        $scope.results.word = $scope.guessWord;
        $scope.results.numCorrect = $scope.countNumberCharactersCorrect($scope.solutionWord, $scope.guessWord);
        $scope.results.posCorrect = $scope.countNumberPositionsCorrect($scope.solutionWord, $scope.guessWord);

        var correct = $scope.checkWordIsCorrect($scope.expectedResults, $scope.results);
        if(correct)
            return "CORRECT!";
        else
            return $scope.results;
    };

    $scope.countNumberCharactersCorrect = function(solution, guess){
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

   $scope.countNumberPositionsCorrect = function(solution, guess){
        var sum = 0;
        for(var i = 0; i < solution.length; i++){
            if(solution[i] === guess[i])
                sum++;
        }
        return sum;
   };

   $scope.checkWordIsCorrect = function(expected, received){
        if(expected.word === received.word &&
            expected.numCorrect === received.numCorrect &&
            expected.posCorrect === received.posCorrect)
            return true;
        else return false;
   };
});


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
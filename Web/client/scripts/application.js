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

        $('#wordLengthLabel').text('Word is ' + $scope.solutionWord.length + ' characters long');
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
        $scope.results.numCorrect = countNumberCharactersCorrect($scope.solutionWord, $scope.guessWord);
        $scope.results.posCorrect = countNumberPositionsCorrect($scope.solutionWord, $scope.guessWord);

        var correct = $scope.checkWordIsCorrect($scope.expectedResults, $scope.results);
        if(correct){
            $scope.writeResultsToTextarea($scope.results)
            alert("CORRECT! " + $$scope.guessWord + " was the word!");
        }
        else{
            $scope.writeResultsToTextarea($scope.results);
        }
    };

   $scope.checkWordIsCorrect = function(expected, received){
        if(expected.word === received.word &&
            expected.numCorrect === received.numCorrect &&
            expected.posCorrect === received.posCorrect)
            return true;
        else return false;
   };

   $scope.writeResultsToTextarea = function(results){
        var previousWord = $('#guessWords').val();
        var previousCorrect = $('#numCorrectTextarea').val();
        var previousPosition = $('#posCorrectTextarea').val();

        var newWord = previousWord + '\n' + results.word;
        var newCorrect = previousCorrect + '\n' + results.numCorrect;
        var newPosition = previousPosition + '\n' + results.posCorrect;

        $('#guessWords').val(newWord);
        $('#numCorrectTextarea').val(newCorrect);
        $('#posCorrectTextarea').val(newPosition);
   };

   $scope.resultsToString = function(results){
        return results.word + "\t" + results.numCorrect + "\t\t" + results.posCorrect;
   };

    $scope.checkRepeatingword = function(word){
        // TODO Implement This
        for(var i=0; i<word.length; i++){

        }
    }

    $('#guessTextbox').change(function(e){
       $('#guessLengthLabel').text('Your guess: ' + ($scope.guessWord.length));
   });

   $('#guessTextbox').keyup(function(e){
       $('#guessLengthLabel').text('Your guess: ' + ($scope.guessWord.length));
   });
});


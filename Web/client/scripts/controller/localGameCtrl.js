app.controller('localGameCtrl', function($scope){
    $scope.solutionWord      = "";
    $scope.guessWord         = "";
    $scope.repeating         = "";
    $scope.solnotification   = "";
    $scope.guessNotification = "";
    $scope.solutionChars     = null;

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

        $('#wordLengthLabel').text();
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
            alert("CORRECT! " + $scope.guessWord + " was the word!");
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
    };

    $scope.extendTextareas = function(){
        var extension = $('#guessWords').attr('height');
        var step = 10;
        if($scope.solnotification)
            extension += step;
        if($scope.repeating)
            extension += step;
        if($scope.guessNotification)
            extension += step;

        $('#guessWords').attr('height', extension);
        $('#numCorrectTextarea').val('height', extension);
        $('#posCorrectTextarea').val('height', extension);
    };

    $('#solutionTextbox').keyup(function(e){
        $scope.solnotification = 'Word is ' + $(this).val().length + ' characters long. ';
        $scope.repeating = ""

        if(isNonTraditionalRepeating($(this).val())){
            $scope.repeating += '\nIs Nontraditional Repeating ';
        }
        else if(isTraditionalRepeating($(this).val()))
            $scope.repeating += '\nIs Traditional Repeating ';

        $('#repeatingLabel').text('');
        if($scope.solnotification){
            $('#wordLengthLabel').text($scope.solnotification);
        }
        if($scope.repeating){
            $('#repeatingLabel').text($scope.repeating);
        }
    });

    $('#guessTextbox').change(function(e){
        $scope.guessNotification = 'Your guess: ' + ($scope.guessWord.length);
       $('#guessLengthLabel').text($scope.guessNotification);
   });

   $('#guessTextbox').keyup(function(e){
       $scope.guessNotification = 'Your guess: ' + ($scope.guessWord.length);
       $('#guessLengthLabel').text($scope.guessNotification);
   });

    $('input:text').change(function(e){
        $(this).val(encodeURIComponent($(this).val()));
    });

   //SETUP DEFAULTS
   $('#guessWords').val("Word");
   $('#numCorrectTextarea').val('NumCorrect');
   $('#posCorrectTextarea').val('PosCorrect');
});

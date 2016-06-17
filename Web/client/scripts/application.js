var app = angular.module("WordGameChecker", []);

app.controller("testCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('wordCheckerCtrl', function($scope){
    $scope.solutionWord = "";
    $scope.guessWord    = "";

    $scope.submitSolution = function(){
        $scope.solutionWord = $('#solutionTextbox').val();
        $('#solutionTextbox').val('##########');
        $('#solutionTextbox').attr('disabled', true);
    };

    $scope.submitGuess = function(){
        $scope.guessWord = $('#guessTextbox').val();
        $('#guessTextbox').val("");

        var results = checkWord($scope.solutionWord, $scope.guessWord);
    };


});

function checkWord(solution, guess){
    //Manipulate This
    var results = {
        guessWord: '',
        numCorrect: 0,
        posCorrect: 0
    }

    var count = countChars(guess);


};

function countChars(word){
    var letters = word.split('');
    var count = []

    return count;
};
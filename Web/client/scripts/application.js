var app = angular.module("WordGameChecker", []);

app.controller("testCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('wordCheckerCtrl', function($scope){
    $scope.solutionWord = "";
    $scope.guessWord    = "";

    $scope.submitSolution = function(){
        $scope.solutionWord = $('#solutionTextbox').val()
        $('#solutionTextbox').val('##########');
        $('#solutionTextbox').attr('disabled', true);
    };

    $scope.submitGuess = function(){

    };
});
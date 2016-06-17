var app = angular.module("WordGameChecker", []);

app.controller("homeCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('wordCheckerCtrl', function($scope){
    $scope.solutionWord = "";
    $scope.guessWord    = "";

    $scope.submitSolution =function(){

    };

    $scope.submitGuess = function(){

    };
});
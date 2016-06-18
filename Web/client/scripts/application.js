var app = angular.module("WordGameChecker", ['ngRoute']);



app.config(['$routeProvider', function($routeProvider){
    $routeProvider
            .when('/',
                {controller: 'HomeCtrl',
                 templateUrl: 'partials/home.html'
                })
            .when('/localGame',
                {controller: 'localGameCtrl',
                 templateUrl: 'partials/local.html'
                })
            .when('/distGame',
                {controller:'distGameCtrl',
                 templateUrl: 'partials/dist.html'
                })
            .otherwise({redirectTo:'/'});
}]);

app.controller("testCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});



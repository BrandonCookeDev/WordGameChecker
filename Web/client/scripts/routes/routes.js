app.config(['$routeProvider', function($routeProvider){
    $routeProvider
            .when('/',
                {controller: 'HomeCtrl',
                 templateUrl: 'partials/home.html'
                })
            .when('/localGame',
                {controller: 'localGameCtrl',
                 templateUrl: 'partials/localGame.html'
                })
            .when('/distGame',
                {controller:'distGameCtrl',
                 templateUrl: 'partials/distGame.html'
                })
            .otherwise({redirectTo:'/'});
}]);
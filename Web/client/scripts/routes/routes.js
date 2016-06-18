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
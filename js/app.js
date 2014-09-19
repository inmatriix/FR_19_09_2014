var app = angular.module('nameApp', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');       
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'partials/form.html',
        controller: 'registerCtrl'
      })
  }])

  app.controller('FormController', ['$scope', function($scope) { //controller for buttons
    $scope.master = {};
 
    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(user) {
      return angular.equals(user, $scope.master);
    };

    $scope.reset();
  }]);

  app.controller('PanelController', function(){   //controller for the panel 
    this.tab =1;

    this.selectTab= function(setTab) { 
      this.tab =setTab;
    };

    this.isSelected=function(checkTab){
      return this.tab===checkTab;
    };

  });

/*     I want to check the user, but it doesn't work so I let here some code that I tried
app.factory('users', function($http){
  return {
    list: function(callback){
      $http.get('json/user.json').success(callback);
    },
    find: function(username, callback){
      $http.get('json/user.json').success(function (data){
        var usr=data.filter(function(entry){
          return entry.username = username;
        })[0];
        callback(usr);
      });
    }
  };
});

 */

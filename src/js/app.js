var app = angular.module('my-profile', ['ui.router','dashboard']);

// console.log("newms");
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/app');
  $stateProvider
    .state('app', {
        url: '/app',
        templateUrl: 'dist/views/home.html',
        controller: 'profileHomeCtrl',
        controllerAs: 'vm'
     });
    //  .state('pic', {
    //      url: '/user',
    //      template: '<h3>new message</h3>'
    //   });
}]);

var appConfig = {
    title: "Corporate Directory",
    lang: "en",
    dateFormat: "mm/dd/yy",
    theme: 'skin-purple',
    layout:""
};

app.constant('appSettings', appConfig);

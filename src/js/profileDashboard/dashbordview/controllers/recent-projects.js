dashboard.controller('recentProjectsCtrl', ['$rootScope', '$scope', '$state', '$location', 'store',
   function ($rootScope, $scope, $state, $location, store){

    //  $scope.recentProjects = 'Recent Projects Veiw';

    var vm = this;
    vm.recentProjectDetail = store.recentpro;
    // vm.recentProjectDetail = store.recentpro.useTool;


}]);

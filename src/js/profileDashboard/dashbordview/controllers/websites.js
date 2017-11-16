dashboard.controller('websitesCtrl', ['$rootScope', '$scope', '$state', '$location', 'store',
   function ($rootScope, $scope, $state, $location, store){

    //  $scope.websites = 'Websites Veiw';
    var vm = this;
    vm.templates = store.allTemplates;

}]);

dashboard.controller('aboutCtrl', ['$rootScope', '$scope', '$state', '$location', 'store',
   function ($rootScope, $scope, $state, $location, store){

    //  $scope.about = 'About Veiw';
    var vm = this;
    vm.aboutDetail = store.aboutMe;

}]);

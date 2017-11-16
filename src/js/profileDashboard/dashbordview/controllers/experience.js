dashboard.controller('experienceCtrl', ['$rootScope', '$scope', '$state', '$location', 'store',
   function ($rootScope, $scope, $state, $location, store){

    //  $scope.experience = 'Experience Veiw';

    var vm = this;

    vm.experiences = store.experiences;

}]);

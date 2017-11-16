



dashboard.controller('educationCtrl', ['$rootScope', '$scope', '$state', '$location', 'store',
   function ($rootScope, $scope, $state, $location, store){
     
     var vm = this;
     vm.education = {};
     
     vm.education.detail = store.education;

}]);

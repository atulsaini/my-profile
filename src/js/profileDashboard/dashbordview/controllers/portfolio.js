dashboard.controller('portfolioCtrl', ['$rootScope', '$scope', '$state', '$location', 'store', 
   function ($rootScope, $scope, $state, $location, store){

    //  $scope.portfolio = 'Portfolio Veiw';
    var vm = this;

    vm.portfolioDetail = store.allPortfolio;

}]);

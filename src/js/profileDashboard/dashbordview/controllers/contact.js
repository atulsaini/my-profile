dashboard.controller('contactCtrl', ['$rootScope', '$scope', '$state', '$location', 'store',
   function ($rootScope, $scope, $state, $location, store){

    //  $scope.contact = 'Contact Veiw';
    var vm = this;
    
    $scope.contactUs = store.contactMe;

    // var proContact = contactUs;
    // console.log(contact);

}]);

var dashboard = angular.module('dashboard', ['ui.router']);



dashboard.config(['$stateProvider', function($stateProvider){


  $stateProvider.state('app.dashboard', {
    url: '/dashboard',
    templateUrl: 'dist/views/dashbord/index.html',
    controller: 'bashbordCtrl',
    controllerAs: 'vm',
    date: {
      pageTitle: 'Home'
    }
  });

  //skills page state
  $stateProvider.state('app.skills', {
    url: '/skills',
    templateUrl: 'dist/views/dashbord/dashview/skills.html',
    controller: 'skillCtrl',
    controllerAs: 'vm',
    data: {
      pageTitle: 'skills'
    }
  });

  //education page state
  $stateProvider.state('app.education', {
    url: '/education',
    templateUrl: 'dist/views/dashbord/dashview/education.html',
    controller: 'educationCtrl',
    controllerAs: 'vm',
    data: {
      pageTitle: 'Dashboard Home'
    }
  });



//Achievements page state
$stateProvider.state('app.achievements', {
    url: '/achievements',
    templateUrl: 'dist/views/dashbord/dashview/achievements.html',
    controller: 'achievementsCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'Achievements'
    }
});

//Recent Projects page state
$stateProvider.state('app.recent', {
    url: '/recent-projects',
    templateUrl: 'dist/views/dashbord/dashview/recent-projects.html',
    controller: 'recentProjectsCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'Recent Projects'
    }
});

//Experience page state
$stateProvider.state('app.experience', {
    url: '/experience',
    templateUrl: 'dist/views/dashbord/dashview/experience.html',
    controller: 'experienceCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'Experience'
    }
});

// Portfolio page state
$stateProvider.state('app.portfolio', {
    url: '/portfolio',
    templateUrl: 'dist/views/dashbord/dashview/portfolio.html',
    controller: 'portfolioCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'Portfolio'
    }
});

//About Me page state
$stateProvider.state('app.about', {
    url: '/about-me',
    templateUrl: 'dist/views/dashbord/dashview/about-me.html',
    controller: 'aboutCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'About Me'
    }
});

//Contact page state
$stateProvider.state('app.contact', {
    url: '/contact',
    templateUrl: 'dist/views/dashbord/dashview/contact.html',
    controller: 'contactCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'Contact Me'
    }
});

//Websites page state
$stateProvider.state('app.websites', {
    url: '/websites',
    templateUrl: 'dist/views/dashbord/dashview/websites.html',
    controller: 'websitesCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'Websites'
    }
});

//Gallery page state
$stateProvider.state('app.gallery', {
    url: '/gallery',
    templateUrl: 'dist/views/dashbord/dashview/gallery.html',
    controller: 'galleryCtrl',
    controllerAs: 'vm',
    data: {
        pageTitle: 'Gallery'
    }
});

//Search page state


}]);

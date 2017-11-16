


dashboard.controller('skillCtrl', ['$rootScope', '$scope', '$state', '$location',
function ($rootScope, $scope, $state, $location){

  var vm = this;

  vm.skills = {};

  vm.skills.development = [
    {
      Software: "Angular JS",
      Percentage: "85",
      theme: "purple-600",
      image: "angular.png"
    },

    {
      Software: "React JS",
      Percentage: "85",
      theme: "grey-800",
      image: "react.png"
    },

    {
      Software: "Javascript",
      Percentage: "80",
      theme: "pink-800",
      image: "javascript.png"
    },
    {
      Software: "jQuery & AJAX",
      Percentage: "80",
      theme: "yellow-800",
      image: "jquery.png"
    }

    // {
    //     Software: "Express JS",
    //     Percentage: "75",
    //     theme: "aqua",
    //     image: "express"
    // },
    
    // {
    //     Software: "Node JS",
    //     Percentage: "83",
    //     theme: "purple",
    //     image: "node"
    // },
    
    // {
    //     Software: "Type Script",
    //     Percentage: "70",
    //     theme: "teal",
    //     image: "typescript"
    // },
    
    // {
    //     Software: "Joomla",
    //     Percentage: "85",
    //     theme: "red",
    //     image: "joomla"
    // }
  ];

  //Design Stack
  vm.skills.design = [
    {
        Software: "HTML 5",
        Percentage: "90",
        theme: "yellow-900",
        image: "html5.png"
    },
    {
        Software: "CSS 3",
        Percentage: "83",
        theme: "purple-a400",
        image: "css3.png"
    },
    {
        Software: "SAAS",
        Percentage: "72",
        theme: "blue-900",
        image: "saas-css.png"
    },
    {
        Software: "Bootstrap",
        Percentage: "85",
        theme: "purple",
        image: "bootstrap-stack.png"
    },
    {
        Software: "Materializecss",
        Percentage: "90",
        theme: "pink-600",
        image: "materialize.png"
    }
];

vm.skills.other = [
  {
    Software: "Github",
    Percentage: "90",
    theme: "purple-800",
    image: "github.png"
  },
  {
    Software: "Bitbuket",
    Percentage: "83",
    theme: "deep-purple-900",
    image: "bitbucket.png"
  }
];


}]);

dashboard.factory('store', [function () {
   
    // experiences seciton

    var experiences = [
        {
          title: "Speedx InfoTech",
          year: "April 2015 to till date",
          time: "Full Time",
          website: "Developing Web applications",
          Ecommerce: "Developing E-Comm sites",
          webApi: "Integrating web apps with API",
          html: "HTML 5",
          css: "CSS3",
          javascript: "JAVASCRIPT",
          jquery: "JQUERY & AJAX",
          bootstrap: "BOOTSTRAP",
          icon: "suitcase",
          theam: "blue-600"
        },
        {
          title: "Mystery Monks",
          year: "(2012 - 2016)",
          time: "Full Time",
          website: "Developing Web applications",
          Ecommerce: "Developing E-Comm sites",
          webApi: "Integrating web apps with API",
          html: "HTML 5",
          css: "CSS3",
          javascript: "JAVASCRIPT",
          jquery: "JQUERY",
          bootstrap: "BOOTSTRAP",
          icon: "suitcase",
          theam: "pink-600"
        }

    ];

    // eduction section
    var eduction = [
        {
          title: "COMPUTER SCIENCE (2012 - 2016)",
          year: "(2012 - 2016)",
          institution: "C.C.S UNIVERSITY, MEERUT",
          board: "U. P",
          theam: "blue-600",
          icon: "graduation-cap",
          mark: 65,
          borderColor: "border-65",
          markBorder: "khjhk"
 
        },
        {
         title: "COMPUTER SCIENCE (2012 - 2016)",
         year: "(2012 - 2016)",
         institution: "C.C.S UNIVERSITY, MEERUT",
         board: "U. P",
         theam: "green",
         icon: "pencil",
         borderColor: "border-58",
         mark: 58,
         markBorder: "khjhk"
 
       },
       {
         title: "COMPUTER SCIENCE (2012 - 2016)",
         year: "(2012 - 2016)",
         institution: "C.C.S UNIVERSITY, MEERUT",
         board: "U. P",
         theam: "pink-900",
         icon: "pencil",
         mark: 64,
         borderColor: "border-64",
         markBorder: "khjhk"
       }
      ];

      // recent-project
      var recentProject = [
        {
          img: "recent.png",
          title: "Angular Bootstrap Dashboard",
          description: "Angular Bootstrap Dashboard is a web dashboard application based on Bootstrap and AngularJS.",
          useTool: [
            {
              html: "HTML5",
              sass: "SASS",
              Angular: "ANGULAR JS",
              npm: "NPM",
              bower: "BOWER"
            }
          ]
        },

        {
          img: "recent.png",
          title: "Angular Bootstrap Dashboard",
          description: "Angular Bootstrap Dashboard is a web dashboard application based on Bootstrap and AngularJS.",
          useTool: [
            {
              html: "HTML",
              sass: "SASS",
              Angular: "ANGULAR JS",
              npm: "NPM",
              bower: "BOWER"
            }
          ]
        }

      ];

      var templates = [
        {
          title: "restaorent",
          tool: "Use Tool",
          html: "HTML",
          css: "CSS",
          javascript: "JAVASCRIPT",
          jquery: "JQUERY",
          bootstrap: "bootstrap"
        },
        {
          title: "restaorent",
          tool: "Use Tool",
          html: "HTML",
          css: "CSS",
          javascript: "JAVASCRIPT",
          jquery: "JQUERY",
          bootstrap: "bootstrap"
        }
      ];

      var portfolio = [
        {
          title: "restaorent",
          tool: "Use Tool",
          html: "HTML",
          css: "CSS",
          javascript: "JAVASCRIPT",
          jquery: "JQUERY",
          bootstrap: "bootstrap"
        },
        {
          title: "restaorent",
          tool: "Use Tool",
          html: "HTML",
          css: "CSS",
          javascript: "JAVASCRIPT",
          jquery: "JQUERY",
          bootstrap: "bootstrap"
        }
      ];

    var about = [
        {
           title: "I Love To",
           movies: "Watch Movies with Friends",
           music: "Listen Music",
           game: "Table Soccer",
           chat: "Group Chat Friends",
        },
        {
          title: "Languages",
          english: "English",
          hindi: "Hindi"
        }
      ];

      var contact = [
        // {
        //   img: "profile.jpg",
        //   title: "Atul Kumar Saini",
        //   mobile: "+91-8375925636",
        //   address: "A-185, new ashok nagar, delhi",
        //   dob: "01/07/1994"
        // },
        // {
        //   title: "Email Id",
        //   font: "<i class='fa fa-envelope-o' aria-hidden='true'></i>",
        //   email: "atul.mtnl@gmail.com"
        // },
        // {
        //   title: "Email Id",
        //   font: "<i class='fa fa-envelope-o' aria-hidden='true'></i>",
        //   email: "atul.mtnl@gmail.com"
        // },
        {
          title: "Email Id",
          font: "<i class='fa fa-envelope-o' aria-hidden='true'></i>",
          email: "atul.mtnl@gmail.com"
        },
        {
          title: "Email Id",
          font: "<i class='fa fa-envelope-o' aria-hidden='true'></i>",
          email: "atul.mtnl@gmail.com"
        },
      ]

    return {
        experiences: experiences,
        education: eduction,
        recentpro: recentProject,
        allTemplates: templates,
        allPortfolio: portfolio,
        aboutMe: about,
        contactMe: contact
    };
        
}]);
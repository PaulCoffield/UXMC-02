//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()








// 03 Routing
router.get('/03/design', (req, res) => {

    req.session.data = {
        "backlog":"Design",
        "workItems":[
          {
            "id": "UI-101",
            "title": "Create login page",
            "status": 0
          },
          {
            "id": "UI-102",
            "title": "Design dashboard layout",
            "status": 1
          },
          {
            "id": "UI-103",
            "title": "Implement user profile section",
            "status": 2
          },
          {
            "id": "UI-104",
            "title": "Add loading spinners",
            "status": 3
          },
          {
            "id": "UI-105",
            "title": "Revise color scheme",
            "status": 0
          },
          {
            "id": "UI-106",
            "title": "Optimize mobile view",
            "status": 1
          },
          {
            "id": "UI-107",
            "title": "Create notification system",
            "status": 2
          },
          {
            "id": "UI-108",
            "title": "Develop settings page",
            "status": 3
          },
          {
            "id": "UI-109",
            "title": "Add animations to buttons",
            "status": 1
          },
          {
            "id": "UI-110",
            "title": "Test cross-browser compatibility",
            "status": 0
          }
        ]
    };

    res.redirect('/03/task-list-macros?backlog=design');

});

router.get('/03/development', (req, res) => {

    req.session.data = {
        "backlog":"development",
        "workItems": [
            {
            "id": "DEV-301",
            "title": "Setup project repository",
            "status": 0
            },
            {
            "id": "DEV-302",
            "title": "Implement authentication",
            "status": 1
            },
            {
            "id": "DEV-303",
            "title": "Create REST API for user management",
            "status": 2
            },
            {
            "id": "DEV-304",
            "title": "Develop frontend for user profile",
            "status": 1
            },
            {
            "id": "DEV-305",
            "title": "Setup CI/CD pipeline",
            "status": 3
            },
            {
            "id": "DEV-306",
            "title": "Integrate third-party payment gateway",
            "status": 0
            },
            {
            "id": "DEV-307",
            "title": "Write unit tests for API endpoints",
            "status": 2
            },
            {
            "id": "DEV-308",
            "title": "Optimize database queries",
            "status": 3
            },
            {
            "id": "DEV-309",
            "title": "Implement caching strategy",
            "status": 1
            },
            {
            "id": "DEV-310",
            "title": "Set up logging and monitoring",
            "status": 0
            },
            {
            "id": "DEV-311",
            "title": "Create documentation for API",
            "status": 2
            },
            {
            "id": "DEV-312",
            "title": "Implement user role management",
            "status": 1
            },
            {
            "id": "DEV-313",
            "title": "Perform code review",
            "status": 3
            },
            {
            "id": "DEV-314",
            "title": "Fix bugs from QA testing",
            "status": 0
            },
            {
            "id": "DEV-315",
            "title": "Conduct performance testing",
            "status": 2
            },
            {
            "id": "DEV-316",
            "title": "Develop reporting module",
            "status": 1
            },
            {
            "id": "DEV-317",
            "title": "Setup data backup strategy",
            "status": 0
            },
            {
            "id": "DEV-318",
            "title": "Integrate with analytics platform",
            "status": 3
            },
            {
            "id": "DEV-319",
            "title": "Implement feature toggles",
            "status": 1
            },
            {
            "id": "DEV-320",
            "title": "Develop admin dashboard",
            "status": 2
            },
            {
            "id": "DEV-321",
            "title": "Create onboarding tutorial",
            "status": 0
            },
            {
            "id": "DEV-322",
            "title": "Optimize application load time",
            "status": 3
            }
        ]
           
    }
        
    res.redirect('/03/task-list-macros?backlog=development');

});

router.get('/03/product', (req, res) => {

req.session.data = {
    "backlog":"product",
    "workItems": [
        {
        "id": "PM-201",
        "title": "Conduct market research",
        "status": 1
        },
        {
        "id": "PM-202",
        "title": "Develop product roadmap",
        "status": 0
        },
        {
        "id": "PM-203",
        "title": "Coordinate stakeholder meetings",
        "status": 2
        }
    ]
      
}

    res.redirect('/03/task-list-macros?backlog=product');

});



// Logging session data  
  
router.use((req, res, next) => {    
    const log = {  
      method: req.method,  
      url: req.originalUrl,  
      data: req.session.data  
    }  
    console.log(JSON.stringify(log, null, 2))  
   
  next()  
}) 
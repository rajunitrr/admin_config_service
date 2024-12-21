# admin_config_service
this Servcie is for dynamic param updates 
Project folder structure
project-root/
├── controllers/             # Business logic and request handling
│   ├── platformConfigController.js
│   ├── table1Controller.js
│   ├── table2Controller.js
│   └── ...
├── models/                  # Database models and query logic
│   ├── platformConfigModel.js
│   ├── table1Model.js
│   ├── table2Model.js
│   └── ...
├── routes/                  # Route definitions for APIs
│   ├── platformConfigRoutes.js
│   ├── table1Routes.js
│   ├── table2Routes.js
│   └── ...
├── middlewares/             # Middleware for authentication, logging, validation, etc.
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── ...
├── utils/                   # Utility functions or constants
│   ├── dbConnection.js      # Database connection
│   └── helper.js
├── config/                  # Configuration files for environment-specific settings
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   └── ...
├── tests/                   # Test cases for the application
│   ├── unit/
│   ├── integration/
│   └── ...
├── .env                     # Environment variables
├── app.js                   # Main application file
├── package.json             # Project metadata and dependencies
└── README.md                # Documentation
=====================================================================


#nodeman
nodemon is a utility that monitors your Node.js application and restarts it whenever changes are detected.
Install nodemon Globally
> npm install -g nodemon

========================================
Table : t_platform_configs  
JS files :
 Module : platformConfigModel.js 
 Controller :platformConfigController

Apis:
GET :: http://localhost:4000/v1/platform/configs/

POST : http://localhost:4000/v1/platform/configs/



Body:
{
  "f_app_id": 3,
  "f_key": "ENABLE_CAL",
  "f_value": "TRUE",
  "f_time": "2024-12-21 15:30:00"
}





==============================================

# admin_config_service
This Servcie is for dynamic params .

=======================================


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

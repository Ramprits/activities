postman create date in pre-request script

var moment = require("moment");
pm.environment.set('activityData',moment().add(14,'days').toISOString());

https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-5.0&tabs=windows#secret-manager

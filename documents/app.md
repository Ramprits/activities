postman create date in pre-request script

var moment = require("moment");
pm.environment.set('activityData',moment().add(14,'days').toISOString());

var logging = require("../../app/core/logging.core.js");

exports.logUserEventHTTP = function (req, res, next) {
    var input = req.query;
    
    console.log("user event: " + JSON.stringify(input));
    //logging.logUserEvent(req.session.id, input.name, input.step, input.details);
    res.send();
}
const fs = require('fs');
const util = require('util');
const path = require('path');
const request = require('request');
const env = require('dotenv').config({"path": path.resolve(__dirname, ".env")}).parsed

function log(msg, level, application, execution_time, environment, user_id, extra_data) {
    var filename = new Date().toISOString().slice(0, 10);
    filename = Date.parse(filename);
    var json = {
        "message": msg,
        "level": level,
        "application": application,
        "environment": environment,
        "user_id": user_id,
        "execution_time": execution_time,
        "extra_data": extra_data,
        "timestamp": Date.now()
    }
    fs.appendFile(env.DIR+'/'+filename + '.log', JSON.stringify(json), function (err) {
        if (err) throw err;
    });    return json;
}

function notify(msg) {
    request.post(
        'NOTIFY_LINK', 
        {"message": msg, "channel": msg['application']},
        function (error, response, body) {
        }
    );
}

exports.warning = function (msg, application, execution_time, environment, user_id, extra_data) {
    log(msg, env.WARNING, application, execution_time, environment, user_id, extra_data);
}
exports.crtical = function (msg, application, execution_time, environment, user_id, extra_data) {
    notify(log(msg, env.CRITICAL, application, execution_time, environment, user_id, extra_data));
}
exports.info = function (msg, application, execution_time, environment, user_id, extra_data) {
    log(msg, env.INFO, application, execution_time, environment, user_id, extra_data);
}
exports.error = function (msg, application, execution_time, environment, user_id, extra_data) {
    log(msg, env.ERROR, application, execution_time, environment, user_id, extra_data);
}


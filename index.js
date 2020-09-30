const fs = require('fs');
const util = require('util');
const path=require('path');
const env=require('dotenv').config({ "path":path.resolve(__dirname,".env") }).parsed
function log(msg,level,application,user_id,extra_data){
    var filename=Math.floor(Date.now() / 1000);
    var log_file = fs.createWriteStream(env.DIR + filename+'.log', {flags : 'w'});
    var json={
        "message":msg,
        "level":level,
        "application":application,
        "user_id":user_id,
        "extra_data":extra_data
    }
    log_file.write(JSON.stringify(json) + '\n');
}
exports.warning = function(msg,application,user_id,extra_data) {
    log(msg,env.WARNING,application,user_id,extra_data);
}
exports.crtical = function(msg,application,user_id,extra_data) {
    log(msg,env.CRITICAL,application,user_id,extra_data);
}
exports.info = function(msg,application,user_id,extra_data) {
    log(msg,env.INFO,application,user_id,extra_data);
}
exports.error = function(msg,application,user_id,extra_data) {
    log(msg,env.ERROR,application,user_id,extra_data);
}


const site = require('./siteRoute');

function route(app){
    app.use('/', site);
}

module.exports = route;
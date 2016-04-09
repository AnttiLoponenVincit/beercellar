const app = require('./config.js').app;
const Routes = require('./routes.js');

Routes(app);

const server = app.listen(8641, function () {
  console.log('Example app listening at port %s', server.address().port);
});
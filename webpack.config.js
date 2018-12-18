const webpackDev = require("./config/webpack.dev");
const webpackProd = require("./config/webpack.prod");
switch(process.env.NODE_ENV){
case "dev":
	module.exports = webpackDev;
	break;
case "prod":
	module.exports = webpackProd;
	break;
default:
	module.exports = webpackDev;
	break;
}
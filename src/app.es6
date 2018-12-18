import Koa from "koa";
import router from "koa-simple-router";
import controllerInit from "./controller/initController";
import render from "koa-swig";
import co from "co";
import serve from "koa-static";
import CONFIG from "./config/config";
import bable_po from "babel-polyfill";
import babel_re from "babel-register";

const app = new Koa();
controllerInit.init(app, router);

app.use(serve(CONFIG.get("staticDir")));

app.context.render = co.wrap(render({
	root: CONFIG.get("viewDir"),
	autoescape: true,
	cache: "memory",
	ext: "html"
}));

app.listen(CONFIG.get("port"), () => {
	console.log("server is running");
});

export default app;
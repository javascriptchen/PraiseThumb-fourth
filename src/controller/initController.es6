import index from "./indexController";
const initController = {
	init(app,router){
		app.use(router(_ => {
			_.get("/index/index", index.index());
			_.get("/index/update", index.update());
			_.get("/index/star", index.star());
			_.get("/index/praise", index.praise());
		}));
	}
};

export default initController;
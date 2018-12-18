import indexmodel from "../model/indexmodel";

const indexController = {
	index() {
		return async (ctx, next) => {
			ctx.body = await ctx.render("index.html", {
				title: "大拇指点赞页面"
			});
		};
	},
	update() {
		return async (ctx, next) => {
			const indexM = new indexmodel(ctx);
			ctx.body = await indexM.updateNum();
		};
	}
};

export default indexController;
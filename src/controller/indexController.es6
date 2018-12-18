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
	},
	star() {
		return async (ctx, next) => {
			if (ctx.request.header["x-pjax"]) {
				ctx.body = "<x-star></x-star>";
			} else {
				ctx.body = await ctx.render("star.html", {
					title: "✨点赞页面"
				});
			}
		};
	},
	praise() {
		return async (ctx, next) => {
			if (ctx.request.header["x-pjax"]) {
				ctx.body = "<x-praise></x-praise>";
			} else {
				ctx.body = await ctx.render("index.html", {
					title: "拇指点赞页面"
				});
			}
		};
	},
	advertisement() {
		return async (ctx, next) => {
			ctx.body = "<div style='background:red;height:100px'>advertisement</div>";
		};
	}
};

export default indexController;
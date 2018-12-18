import requestSuper from "supertest";
import app from "../app.js";

function request() {
	return requestSuper(app.listen());
}

describe("点赞测试", function() {
	it("这是点赞加一接口测试", function(done) {
		request()
			.get("/index/update")
			.expect(200)
			.end(function (err, res) {
				if (res.result == 1) return done(err);
				done();
			});
	});
});
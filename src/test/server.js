"use strict";

var _supertest = require("supertest");

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require("../app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request() {
	return (0, _supertest2.default)(_app2.default.listen());
}

describe("点赞测试", function () {
	it("这是点赞加一接口测试", function (done) {
		request().get("/index/update").expect(200).end(function (err, res) {
			if (res.result == 1) return done(err);
			done();
		});
	});
});

import rpA from "request-promise";

class indexModel {
	constructor(ctx) {
		this.ctx = ctx;
	}

	updateNum() {
		var options = {
			uri: "http://localhost/praise.php",
			method: "GET",
		};

		return new Promise((resolve, reject) => {
			rpA(options).then(function (result) {
				const info = JSON.parse(result);
				if (info) {
					resolve({
						data: info
					});
				}else{
					reject({
						data:222
					});
				}
				console.log(info);
			}).catch(function (err) {
				console.log(err);
			});
		});

	}
}

export default indexModel;
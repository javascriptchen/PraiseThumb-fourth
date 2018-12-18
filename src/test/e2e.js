const {Builder, By, Key, until} = require("selenium-webdriver");

(async function example() {
	let driver = await new Builder().forBrowser("firefox").build();
	try {
		await driver.get("http://localhost:3000/index/index");
		await driver.findElement(By.id("thumb")).click();
		// 这里动画怎么调都调不出来，以后再看
		const _annimation = driver.findElement(By.id("animation"));
		await driver.wait(_annimation.isDisplayed(), 1000);
	} finally {
		// 需要接口返回需要注释这一行，以及动画的那两行，玄学问题
		await driver.quit();
	}
})();

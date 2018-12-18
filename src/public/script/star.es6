import {Star} from "./index.es6";
let p = new Star();
let f = "";
xtag.register("x-star", {
	content: 
	`<div class='star' id='star' > 
        <div class='star1'></div> 
    </div> 
    <span class='hide' id='animation'>+1</span>`,
	methods: {
		praise() {
			let _this = this;
			p.clickAction();
			let annimation = _this.querySelector("#animation");
			animation.className = "hide num";
			setTimeout(() => {
				annimation.className = "hide";
			}, 800);
		}
	},
	events: {
		click(e) {
			let _this = this;
			if (e.target.id == "star") {
				if (f) {
					clearTimeout(f);
				} else {
					setTimeout(() => {
						_this.praise();
					}, 500);
				}
			}
		}
	}
});
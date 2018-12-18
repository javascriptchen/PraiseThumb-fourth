import PraiseButton from "./index.es6";
let p = new PraiseButton();
let f = "";
xtag.register("x-praise", {
	content: `<div class="hand" id="thumb">
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger thumb"></div>
        <div class="arm"></div>
    </div>
    <span class="hide" id="animation">+1</span>`,
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
			if (e.target.id == "thumb") {
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
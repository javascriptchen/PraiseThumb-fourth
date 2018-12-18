import css from "../css/index.css"; //把css一起通过webpack打包，后面再抽出来

class PraiseButton {
	constructor() {}
	clickAction() {
		axios.get("/index/update")
			.then(res => {

			})
			.catch(err => {

			});
	}
}

export default PraiseButton;
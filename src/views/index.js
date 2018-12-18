module.exports = function (templateParams) { //一直搞不懂templateParams怎么传进来的，难道是默认参数？
	var _cssList = ["vendor"];
	var webAssetsHelp = require("./webAssetsHelp.js")(templateParams, _cssList);
	var _html =
        `{% extends './layout.html' %} 
                {% block title %}厉害{% endblock %} 
                {% block styles %} 
                ${webAssetsHelp.styles}
                {% endblock %} 
                {% block content %}{% include '../widget/index.html' %}{% endblock %} 
                {% block script %} 
                <script>
                (function () {
                    var flag = false;
                    var myscripts = [${webAssetsHelp.myscripts}];
                    for (let i = 0; i < myscripts.length; i++) {
                        let a = myscripts[i];
                        if (localStorage.getItem(a)) {
                            $("<scr" + "ipt>" + localStorage.getItem(a) + "</scr" + "ipt>").attr({
                                "type": "text/javascript",
                                "id": i
                            }).appendTo($("head").remove("#"+i));
                        }else{
                            localStorage.clear();
                            flag = true;
                            for (let j = 0; j < myscripts.length; j++) {
                                let b = myscripts[j];// 这里需要用let声明，不然会被覆盖
                                axios.get(b).then(data => {
                                    localStorage.setItem(b, data.data);
                                });
                            }
                            break;
                        }
                    }
                    if (flag) {
                        LazyLoad.js(myscripts, function () {
                            // 但是这边有bug，三个js加载了两次
                        });
                    }
                })();
                </script>
                {% endblock %}`;

	return _html;
};
module.exports = function (templateParams) {//一直搞不懂templateParams怎么传进来的，难道是默认参数？
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
                    var myscripts = [${webAssetsHelp.myscripts}];
                    for (let i = 0; i < myscripts.length; i++) {
                        let a = myscripts[i];
                        if (localStorage.getItem(a)) {
                            $("<scr" + "ipt>" + localStorage.getItem(a) + "</scr" + "ipt>").attr({
                                "type": "text/javascript",
                                "id": i
                            }).appendTo($("head").remove("id", i));
                        }else{
                            $.getScript({
                                url:a,
                                success:function(data){
                                    localStorage.setItem(a,data);
                                }
                            });
                        }
                    }
                })();
                </script>
                {% endblock %}`;

	return _html;
};
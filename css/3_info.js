//商务通 
function msgOpen(){
	window.open("http://p.qiao.baidu.com/cps/chat?siteId=12278560&userId=25672771&cp=&cr=bd&cw=bdpc");
}
window.addEventListener("load",function(){			
	//表单验证信息 
	var $error = document.createElement("div");
	$error.classList.add("error");		
	var html = '<img src="picture/error.png" width="22px"/><label id="msg">&nbsp;&nbsp;请填写此字段！</label>';
	$error.innerHTML = html;		
	frmBtn.onclick = function(){
		if(isNull(userPhone) == false){
			return false;
		}else if(isPhone(userPhone) == false){
			return false;
		}else{
			$.ajax({
				type: "post",
				url: 'http://aiyou91.w191-e1.ezwebtest.com/tools/api.ashx?action=baoming',
				data: { 
					zhuanye: $("input[name='Professional']:checked").val(),
					nianxian:$("input[name='workYear']:checked").val(),
					xueli: $("input[name='education']:checked").val(),
					mobile: $("#userPhone").val(),
				},
				dataType: 'json',
				success: function (data) {
					if (data.status == "1") {
						alert( '信息提示成功，稍后专业顾问免费为您解答报考咨询，最新学习资料赠送，请保持电话畅通.');
					} else {
						alert(data.msg);
					}
				}
			});
			return true;
		}
		return true;
	}
	// 验证文本框不为空
	function isNull(tag){
		if(tag.value == ""){					
			tag.parentNode.append($error);
			setTimeout(function(){$error.remove();},1000)
			return false;
		}			
		return true;
	}
	//验证电话格式
	function isPhone(tag){
		var v = /^[1][3,4,5,7,8][0-9]{9}$/;
		if(!v.test(tag.value)){
			tag.parentNode.append($error);	
			var msg = document.getElementById("msg");
			msg.innerHTML = "请输入正确的手机号！";
			setTimeout(function(){$error.remove();},1000)					
			return false;
		}
	}
})
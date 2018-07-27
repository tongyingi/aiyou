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
			 var phone = $('#userPhone').val();
			 var nameStr = '';
			 var content = '工作年限' + $("input[name='workYear']:checked").val();
			 var others = {
				area: '',
				examType: '',
				major:$("input[name='Professional']:checked").val(),
				school:"",
				registerLevel:"",
				education:$("input[name='education']:checked")
			 };
			 sendPage(phone, nameStr, content, others); //参数位置是固定的 other这个参数必须是对象
		}
		return true;
	}
	// 不为空
	function isNull(tag){
		if(tag.localName == "input"){
			if(tag.value == ""){
				tag.parentNode.append($error);
				var msg = document.getElementById("msg");
				msg.innerHTML = "该字段不能为空！";
				setTimeout(function(){$error.remove();},1000)
				return false;
			}
		}else if(tag.localName == "select"){				
			if(tag.value == "0"){
				tag.parentNode.append($error);	
				var msg = document.getElementById("msg");
				msg.innerHTML = "请选择该字段！";
				setTimeout(function(){$error.remove();},1000)					
				return false;
			}
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
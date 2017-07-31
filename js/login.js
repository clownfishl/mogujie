 window.onload=function(){
 	 document.getElementById('btn').onclick = function(){
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	var pattern =/^1\d{10}$/;
	var res = pattern.test(inp1);
	if(!res||inp1==""){	
		alert("手机号输入有误或手机号不能为空")
		return
	}
	if(inp2==""){
		alert("密码不能为空")
		return;
	}
	alert('登录成功')
}
 }

$(document).ready( function(){
	$("#username").focus(function(){
		if(this.value == "") {
			$(this).attr("placeholder","");
		}

	});
	$("#userpaw").focus(function(){
		if(this.value == "") {
			$(this).attr("placeholder","");
		}
	});
	$("#username").blur(function(){
		if(this.value == "") {
			$(this).attr("placeholder","邮箱/会员账号/手机账号");
		}

	});
	$("#userpaw").blur(function(){
		if(this.value == "") {
			$(this).attr("placeholder","请输入密码");
		}
	});
	$("#login").click(function(){
		console.log($("#username").val() , $ ("#userpaw").val() );
	});
})

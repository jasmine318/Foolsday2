// JavaScript Document
$(function(){
	//导航
	if($('.nav a').hasClass("numbtn")){
		$('.nav').animate({"background-positionY":-0},1);
		}
	if($('.nav a').hasClass("messgbtn")){
		$('.nav').animate({"background-positionY":-44},1);
	}
	if($('.nav a').hasClass("overpaybtn")){
		$('.nav').animate({"background-positionY":-88},1);
	}
	 $('.realbtn').click(function(){
		showdemo($("#sfnouse"));
		//showdemo($("#bangding"));
	});
	$('.qdbtn,.tmbg,.cancelbtn,.surebtn').click(function(event){
		$('.tmbg').hide();
	});
	$(".tank").click(function (event) { 
		event.stopPropagation();//阻止事件向上冒泡 
	}); 	
	$('.cztext').bind('keyup', function () {
		if($('.cztext').val().length==4){
           $('.cztext').blur();
		   $(".realbtn").addClass('onit');
		}else{
		}
  });	
	$('.inp1').bind('keyup', function () {
		if($('.inp1').val().length!==0){
			$('.closebtn').show();
		}
		if($('.inp1').val().length==11){
			$('.inp1').blur();
			ifclick();
		}
	})
	$('.inp1').bind('paste', function () {
		if($('.inp1').val().length!==0){
			$('.closebtn').show();
		}
	})
	$('.closebtn').click(function()
	{
		 $(this).parent().find('input').val('');
		 $(this).parent().find('input').focus();
		 $('.closebtn').hide();
	});
 //右边关闭按钮
	$(".closebtn").each(function(i){
		$(this).on('click',function(){
			$(this).parent().find('.inp1').val('');
			$(this).hide();
		})
	});
	
	$("#yam-a").click(function(){
		  var c=$('.inputnum').val().length;
		 
		  if(c==11&&cont==1){
		   //if(cont==1){
			   settime();
		   }else{
			   return false;
			}
	  });

	
	

	
})
function ifclick(){
	if($('.inp1').val().length==11){
		$("#getnum").css("background","#06BF04");
		$("#yam-a").css("color","#fff");
	}else{
		$("#getnum").css("background","#06BF04");
		
	}
	
} 
	 /*获取验证码js*/
var cont=1;
 var countdown = 60;
function settime(){
 	 var val=document.getElementById("yam-a");
 	 if(countdown==0){
	cont=1;	 
	document.getElementById("yzm-zz").style.display="none";
	document.getElementById("getnum").style.backgroundColor ="#06BF04";
	document.getElementById("yam-a").style.color ="#fff";
  	val.innerHTML="获取验证码";
 	countdown = 60;
	clearTimeout();
	return false;
	}
	else{
	cont=2;
	document.getElementById("yzm-zz").style.display="block";
 	val.innerHTML=countdown + "秒后重发";
	document.getElementById("getnum").style.backgroundColor ="#c6c6c6";
	document.getElementById("yam-a").style.color ="#888";
 	countdown--;
	}
	setTimeout(function() {
	settime()
	},1000);  
 }
 function showdemo(obj){
	$(".tmbg").hide();
	obj.show();
	var screenHeight = $(window).height();
	var tankuangHeight =obj.find('.tank').height();
	var topHeight =(screenHeight-tankuangHeight)/2;
	obj.height(screenHeight);
	obj.children().css('top',topHeight);
}	

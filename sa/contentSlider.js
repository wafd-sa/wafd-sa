$.timer=function(d,b){if(!b)return!1;_timer=function(a,b){this.stop=function(){clearInterval(c.id)};this.internalCallback=function(){b(c)};this.reset=function(a){c.id&&clearInterval(c.id);this.id=setInterval(this.internalCallback,a||100)};this.interval=a;this.id=setInterval(this.internalCallback,this.interval);var c=this};return new _timer(d||100,b)};
$(document).ready(function(){function d(){$(".ctl00_ContentPlaceHolder1_Rotator_jqImageList li:nth-child("+b+")").fadeOut(400,function(){$(".ctl00_ContentPlaceHolder1_Rotator_jqImageList li:nth-child("+a+")").fadeIn(400);$(".ctl00_ContentPlaceHolder1_Rotator_jqImageLinks li a").removeClass("ctl00_ContentPlaceHolder1_Rotator_selected");$(".ctl00_ContentPlaceHolder1_Rotator_jqImageLinks li:nth-child("+a+") a").addClass("ctl00_ContentPlaceHolder1_Rotator_selected");b=a;a=a==e?1:a+1})}var b=1,a=2,e=$(".ctl00_ContentPlaceHolder1_Rotator_jqImageList li").length;
$(".ctl00_ContentPlaceHolder1_Rotator_jqImageList li").hide();$(".ctl00_ContentPlaceHolder1_Rotator_jqImageList li:first-child").fadeIn();$(".ctl00_ContentPlaceHolder1_Rotator_jqLink").click(function(){$(".ctl00_ContentPlaceHolder1_Rotator_jqImageLinks li a").removeClass("ctl00_ContentPlaceHolder1_Rotator_selected");$(this).addClass("ctl00_ContentPlaceHolder1_Rotator_selected");c.stop();this.blur();var f=$(".ctl00_ContentPlaceHolder1_Rotator_jqImageLinks a").index(this)+1;$(".ctl00_ContentPlaceHolder1_Rotator_jqImageList li:nth-child("+
b+")").fadeOut(400,function(){$(".ctl00_ContentPlaceHolder1_Rotator_jqImageList li:nth-child("+f+")").fadeIn(400)});a=b=f;a=a==e?1:a+1;c=$.timer(4E3,function(a){d()});return!1});var c;c=$.timer(4E3,function(a){d()})});

$(function(){var o=$('.move-slider[data-direction="left"]'),c=$('.move-slider[data-direction="right"]'),i=$(".slider-small"),t=i.width()-$(".slider-container").width(),r=!0,e,n,s,d,l=function(d){e=i.position().left,n="right"==d?-1:1,r&&(s=e+805*n,s>0?(s=0,o.css("background-color","grey")):o.css("background-color","#ffcf28"),s<-t?(s=-t,c.css("background-color","grey")):c.css("background-color","#ffcf28"),i.css("left",s))};$(".move-slider").on("click",function(){d=$(this).attr("data-direction"),l(d),r=!1,setTimeout(function(){r=!0},1e3)})});
import "jquery";
import "../css/main.scss";
import "../css/responsive.scss";
import "../users.html";
import "../app/index.js";   
var path=require("path");

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../img/', true));
requireAll(require.context('../img/bar/', true));
requireAll(require.context('../img/cocktails/', true));
requireAll(require.context('../img/events/', true));
requireAll(require.context('../img/social/', true));

function changeIcon() {
	let imgSrc = ($("#menu-icon").attr("src") === path.resolve(__dirname, "img/close.png"))
            ? path.resolve(__dirname, "img/grid.png")
            : path.resolve(__dirname, "img/close.png");
  $("#menu-icon").attr("src", imgSrc);
}
$(".menu-list").hide();
$("#menu-icon").click(function (event) {
	changeIcon();
	$(".menu-list").animate({width:'toggle'},350);
	$('#menu').toggleClass('open');
	event.stopPropagation();
}); 

$("html").click(function (){
  if($('#menu').hasClass("open")){
  		changeIcon();
      $('#menu').removeClass('open');
			$(".menu-list").animate({width:'toggle'},350);
  } 
});

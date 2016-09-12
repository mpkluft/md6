console.log('\'Allo \'Allo!');
// partials/owl.carousel.js

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


$(function(){

	$(".carousel").owlCarousel({
	  items: 1,
	  autoPlay: 4000,
	  lazyLoad: true,
	  singleItem: true,
	});

$(".burger").click(function(){
	$(this).toggleClass("is-active");
});

function menu(menuClass, curElWithoutDot){
	
	var ul = $(menuClass).find("ul").eq(0),
			ulClass =ul.attr("class"),
			li = $(ul).find("li").eq(0),
			liClass =li.attr("class"),
			a = li.find("a").eq(0),
			aClass = a.attr("class"),
			curElement = curElWithoutDot;

	$("." + aClass).eq(0).addClass(curElWithoutDot);

	$(".ul__nav .ul__nav " + "."+aClass).removeClass(aClass).addClass("sub");
	$("." + aClass).click(function(){
		$("."+curElWithoutDot).removeClass(curElWithoutDot);
		$(this).addClass(curElWithoutDot);
	});

	$(".sub").click(function(){
		$("."+curElWithoutDot).removeClass(curElWithoutDot);
		$(this).parent().parent().parent().find("." + aClass).addClass(curElWithoutDot);
	});
}

menu(".nav", "a__nav_current");

$('#smartmenu').smartmenus({
	subIndicatorsText: "<i class = 'fa fa-sort-desc'></i>",
	subIndicatorsPos: 'append'
});


$(".burger").click(function(){
	if($(".sub-menu__nav").attr("class") == "sub-menu__nav"){
		$(".sub-menu__nav").removeClass("sub-menu__nav").addClass("vasya").animateCss('bounceInDown');
		console.log($(".vasya").length);
	} else {
		$(".vasya").removeClass("vasya").addClass("sub-menu__nav");
	}
});

$(".a-sub__nav").eq(0).addClass("a__nav_current");

$(window).resize(function(){
	if($(".vasya").length) {
		$(".burger").removeClass("is-active");
		$(".vasya").removeClass("vasya").addClass("sub-menu__nav");
	}
	
})
//$(".sub-menu__nav").animateCss('bounce');

$(".owl-carousel").owlCarousel({
	singleItem: true,
	items: 1,
	navigation: true,
	navigationText: ["назад", "вперед"]
});
	
})



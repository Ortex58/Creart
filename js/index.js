// external js: masonry.pkgd.js

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


$(window).scroll(function(){
		// 200px от верха
		if ($(window).scrollTop() > '400'){
			//alert('200');
			$('header').css({"background":"rgba(244, 247, 249, 0.5)"});
		}else if ($(window).scrollTop() < '91') {
			$('header').css({"background":"rgba(244, 247, 249, 1)"});
		}
		
		// низ активного окна...
		/*if ($(window).scrollTop() == $(document).height() - $(window).height()){
			alert($(window).scrollTop());
			$('#div').css({"background":"url(http://www.fonstola.ru/pic/201111/1366x768/fonstola.ru-55713.jpg);"});
		}*/
	});
var search = document.querySelector('#search');
var searchForm = document.querySelector('.search');
search.onclick = function(e) {
	if (searchForm.classList.contains('hiden')) {
		searchForm.classList.remove('hiden');	
	} else {
		searchForm.classList.add('hiden');	
	}
	
}
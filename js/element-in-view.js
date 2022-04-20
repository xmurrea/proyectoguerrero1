(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).on('scroll', function() {
  
  $(".anim-icons .icon-circle-1,.clients-section-two .icon-layer,.clients-section-two.style-two .icon-layer,.anim-icons .icon-circle-2,.anim-icons .icon-circle-3,.page-title .layer-1,.page-title .layer-2,.anim-icons .icon-triangle-1,.anim-icons .icon-triangle-2,.about-section .shape-1,.about-section .shape-2,.about-section .shape-3,.about-section .shape-4,.icon-blue-blur,.icon-pink-blur,.icon-green-blur,.icon-orange-blur,.features-section-six .layer-image,.clients-section-two.style-two .icon-layer,.clients-section-two .image-column .icon").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("now-in-view"); 
    } else {
      el.removeClass("now-in-view");
    }
  });
  
});

$(document).on('ready', function() {
  $(".anim-icons .icon-circle-1,.clients-section-two .icon-layer,.clients-section-two.style-two .icon-layer,.anim-icons .icon-circle-2,.anim-icons .icon-circle-3,.page-title .layer-1,.page-title .layer-2,.anim-icons .icon-triangle-3,.anim-icons .icon-triangle-3,.about-section .shape-1,.about-section .shape-2,.about-section .shape-3,.about-section .shape-4,.icon-blue-blur,.icon-pink-blur,.icon-green-blur,.icon-orange-blur,.features-section-six .layer-image,.clients-section-two.style-two .icon-layer,.clients-section-two .image-column .icon").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("now-in-view"); 
	} else {
	  el.removeClass("now-in-view");
	}
  });
});
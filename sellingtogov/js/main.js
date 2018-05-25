/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.submenu = {
  attach: function(context, settings) {
  			// submenu toggle
    		var plus = $('.region-sidebar-first h2, .pane-menu-block-1 h2');
        plus.addClass('icon-plus');
        plus.click(function () {
        		if(plus.hasClass('icon-plus')) {
                plus.removeClass('icon-plus').addClass('icon-minus');
            }
            else {
                plus.removeClass('icon-minus').addClass('icon-plus');
            }
			   $(this).next('.region-sidebar-first .block__content, .pane-menu-block-1 .menu-block-wrapper').slideToggle(200);
			   
			});

  }
};

Drupal.behaviors.responsive = {
  attach: function(context, settings) {
        // responsive menu
       $('#block-menu-block-2').meanmenu();

  }
};


})(jQuery, Drupal, this, this.document);

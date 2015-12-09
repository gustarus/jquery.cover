'use strict';

(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {
  var defaults = {
    enableStyle: true,
    enableResize: true
  };

  $.fn.cover = function(options) {
    var $preview = $('.js-topic__preview');
    var $picture = $preview.find('img:first');

    var handler = function() {
      if ($preview.height() / $preview.width() > $picture.height() / $picture.width()) {
        $picture.height($preview.height());
      } else {
        $picture.width($preview.width());
      }
    };

    if (options.enableStyle) {
      $picture.css({
        margin: 'auto',
        position: 'absolute',
        top: '-9999px',
        bottom: '-9999px',
        left: '-9999px',
        right: '-9999px'
      });
    }

    handler();
    if (options.enableResize) {
      $(window).resize(handler);
    }
  }
}));

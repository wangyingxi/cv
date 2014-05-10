(function($) {
	$.xCenter = function(selector) {
		if (!selector)
			selector = '.xcenter';
		var arr = $(selector);
		$.each(arr, function() {
			var $this = $(this);
			var parent = $(window);
			var pw = parent.width();
			var ph = parent.height();

			if ($this.css('position') != 'absolute' || $this.css('position') != 'fixed') {
				$this.css('position', 'absolute');
			}
			$this.css('left', (pw - $this.width()) / 2);
			var ft = (ph - $this.height()) / 2;
			if ($this.attr('shape') === 'square')
				ft = (ph - $this.width()) / 2;
			$this.css('top', ft);
		});
	}
	var DURATION = 300;
	function setBodyBg(src) {
		if (!src) {
			return;
		}
		$('.bg-block').css('background-image', 'url(' + src + ')');
	}

})(jQuery);

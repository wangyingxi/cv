(function($) {
	$.xCenter = function(selector) {
		if (!selector)
			selector = '.xcenter';
		var arr = $(selector);
		$.each(arr, function() {
			var $this = $(this);
			var parent = $this.parent();
			var pw = parent.width();
			var ph = parent.height();
			if ($this.css('position') != 'absolute' || $this.css('position') != 'fixed') {
				$this.css('position', 'absolute');
			}
			$this.css('left', (pw - $this.width()) / 2);
			$this.css('top', (ph - $this.height()) / 2);
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

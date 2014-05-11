var DURATION = 300;
(function($) {
	$.fn.xCenter = function() {
		var $this = $(this);
		var parent = $(window);
		var pw = parent.width();
		var ph = parent.height();

		if ($this.css('position') != 'absolute' && $this.css('position') != 'fixed') {
			$this.css('position', 'absolute');
		}
		$this.css('left', (pw - $this.width()) / 2);
		var ft = (ph - $this.height()) / 2;
		if ($this.attr('shape') === 'square')
			ft = (ph - $this.width()) / 2;
		$this.css('top', ft);
	}

	$.fn.slidePage = function() {
		$.each($(this), function() {
			var $this = $(this);
			$this.swipe({
				swipeUp : function() {
					// alert($this.attr('next'));
					var currentOne = $this.closest('.page');
					var nextOne = $('#' + currentOne.attr('next'));
					$.turn(nextOne, currentOne);
				},
				swipeDown : function() {
					// alert($this.attr('prev'));
					var currentOne = $this.closest('.page');
					var prevOne = $('#' + currentOne.attr('prev'));
					$.turn(prevOne, currentOne);
				},
				threshold : 50
			});
		});
	}

	$.bindLaunch = function() {
		$('#page1').bind('launch', function() {
			$('.page').removeClass('current');
			$(this).addClass('current');
			$('#page1-ctrl1').xCenter();
			$('#page1-ctrl1').off('click');
			$('#page1-ctrl1').on('click', function() {
				var $this = $(this);
				$this.off('click');
				$this.animate({
					width : '30%',
					left : '35%',
					top : '50px'
				}, DURATION, function() {
					var $this = $(this);
					var t = $this.offset().top + $this.height() + 20;
					$('#page1-ctrl2').animate({
						top : t
					}, DURATION, function() {
						$(this).siblings('.downarr').fadeIn();
					});
				});
			});
		});

		$('#page2').bind('launch', function() {

		});
	}

	$.turn = function(nextOne, currentOne) {
		if (currentOne)
			currentOne.css('z-index', 2);
		nextOne.show();
		if (nextOne.length) {
			nextOne.css('z-index', 3);
			nextOne.animate({
				top : 0
			}, DURATION, function() {
				if (currentOne) {
					currentOne.animate({
						top : '100%'
					});
					currentOne.hide();
				}
			});
		}
	}
})(jQuery);

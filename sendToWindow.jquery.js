/**
 * @author Aram Baghdasaryan <aram.baghdasaryan@gmail.com>
 * @link http://jiromm.info/
 * @version 0.1.2
 * @license http://creativecommons.org/licenses/by/3.0/ Creative Commons Attribution 3.0 Unported (CC BY 3.0)
 */
(function($) {
	$.fn.sendToWindow = function(params) {
		params = $.extend( {
			scrollbars: 'no',
			menubar: 'no',
			height: 600,
			width: 800,
			resizable: 'yes',
			toolbar: 'no',
			status: 'yes'
		}, params);

		var baseform = $(this);
		var action = baseform.attr('action');
		var method = baseform.attr('method');
		var windowname = 'targetwindow';
		var input = null;

		baseform.submit(function(){
			var targetform = $('<form />', {
				method: method,
				action: action,
				target: windowname
			}).appendTo("body");

			baseform.find('input').each(function(){
				input = $('<input />', {
					type: $(this).attr('type'),
					name: $(this).attr('name'),
					value: $(this).val()
				}).appendTo(targetform);
			});

			window.open('about:blank', windowname,
				'scrollbars=' + params.scrollbars + ',\
                menubar=' + params.menubar + ',\
                height=' + params.height + ',\
                width=' + params.width + ',\
                resizable=' + params.resizable + ',\
                toolbar=' + params.toolbar + ',\
                status=' + params.status);

			targetform.submit().hide();

			return false;
		}).end();

		// allow jQuery chaining
		return this;
	};
})(jQuery);
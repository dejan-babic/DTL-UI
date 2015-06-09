(function(){
	'use strict';

	/**
	 * Expose control over appearance and message of the spinner
	 */
	angular.module('dtl')
		.factory('dtlSpinner', dtlSpinner);

	dtlSpinner.$inject = ['$log', 'SYSTEM_MESSAGE'];

	function dtlSpinner($log, SYSTEM_MESSAGE) {

		var container;
		var message = '';
		var defaultMessage = SYSTEM_MESSAGE.DEFAULT_SPINNER_MESSAGE;

		return {
			init: init,
			start: start,
			update: update,
			stop: stop,
			message: getMessage
		};

		function start(msg) {
			$log.debug('dtlSpinner:start()');
			message = validateMessage(msg);
			container.fadeIn('slow');
		}

		function update(msg) {
			$log.debug('dtlSpinner:update()');
			message = validateMessage(msg);
		}

		function stop() {
			$log.debug('dtlSpinner:stop()');
			container.fadeOut('slow');
		}

		function getMessage() {
			$log.debug('dtlSpinner:getMessage()');
			return message;
		}

		function validateMessage(msg) {
			return angular.isString(msg) ? msg : defaultMessage;
		}

		function init(element) {
			var initSuccess = false;
			$log.debug('dtlSpinner:init()');
			container = element.find('#dtlSpinner');
			if (container.length === 0) {
				$log.debug('dtlSpinner:init() failed. Spinner with ID dtlSpinner not found');
				initSuccess = false;
				//TODO [DB] Notify user
			} else {
				initSuccess = true;
			}
			return initSuccess;
		}
	}

})();

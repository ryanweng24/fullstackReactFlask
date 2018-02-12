window.client = (function () {
	function getHome(success) {
		return fetch('/', {
			headers: {
				Accept: 'application/json',
			},
		}).then(checkStatus)
		.then(parseJSON)
		.then(success);
	}

	function checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			console.log("error");
		}
	}

	function parseJSON(response) {
		return response.json();
	}

	return {
		getHome
	};
}());
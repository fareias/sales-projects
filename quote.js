(function() {

	var quote = function (from, to, callback) {
		var conversion = (from + '_' + to).toUpperCase();
		var uid = 'jsonp_' + Date.now();
		window[uid] = function(data) {
			callback(data[conversion].val);
		};
		var transport = document.createElement('script');
		transport.src = 'http://www.freecurrencyconverterapi.com/api/v3/convert?q=' + conversion + '&compact=y&callback=' + uid;
		transport.onload = function() {
			transport.parentNode.removeChild(transport);
			delete window[uid];
		};
		document.head.appendChild(transport);
	};

	quote('usd', 'brl', function(data) {
		console.log(data);
	});

})();
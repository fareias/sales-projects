(function() {

// Jsonp function to get current quotations	

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

// Variables definitions

	var	resources = 0,
		client = '',
		duration= 0,
		otherCosts = 0,
		margin = 0,
		manHour = 0,
		finalPrice = 0,
		finalCost= 0,
		averageCost = 90,
		hiringTaxes = 0.76,
		incomeTaxes = 0.18,
		currency = document.getElementById('currency'),
		form = document.getElementById('myform');

// Function to get inputs, work with them and give Simulator outputs depending on quotation value

	var listener = function(event) {
		var id = event.target.id,
			value = event.target.value;

		switch(id) {
			case 'client':
				client = value;
				document.getElementById('clientInput').innerHTML = client;
				break;
			case 'resources':
				resources = parseFloat(value);
				document.getElementById('resourcesInput').innerHTML = resources;
				break;
			case 'duration':
				duration = parseFloat(value);
				document.getElementById('durationInput').innerHTML = duration + " " + "hour(s)";
				break;
			case 'othercosts':
				otherCosts = parseFloat(value);
				document.getElementById('otherInput').innerHTML = otherCosts.toFixed(2);
				break;
			case 'margin':
				margin = parseFloat(value);
				document.getElementById('marginInput').innerHTML = margin + "%";
				break;
		};

// Calculations

		if (currency.options[currency.selectedIndex].text === "BRL") {

			finalCost = (duration * averageCost * (1 + hiringTaxes)) + otherCosts;
				document.getElementById('finalCost').innerHTML = "R$" + finalCost.toFixed(2);
				
			finalPrice = finalCost/((1 - incomeTaxes) - (margin/100));
				document.getElementById('finalPrice').innerHTML = "R$" + finalPrice.toFixed(2);

		} else {
			
			quote('usd', 'brl', function(data) {
		
				document.getElementById('quotation').innerHTML = "Quotation:" + " " + data;

				finalCost = (duration * averageCost * (1 + hiringTaxes))/data + otherCosts;
					document.getElementById('finalCost').innerHTML = "USD" + finalCost.toFixed(2);
					
				finalPrice = finalCost/((1 - incomeTaxes) - (margin/100));
					document.getElementById('finalPrice').innerHTML = "USD" + finalPrice.toFixed(2);
				
				});			
			};	
	};

// Adding event listeners

	form.addEventListener('input', listener);
	currency.addEventListener('change', listener);
	
})();


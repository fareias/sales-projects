(function() {
	var form = document.getElementById('myform'),
		resources = 0,
		client = '',
		duration= 0,
		otherCosts = 0,
		margin = 0,
		manHour = 0,
		finalPrice = 0,
		finalCost= 0;

	form.addEventListener('input', function(event) {
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
				document.getElementById('otherInput').innerHTML = "R$" + otherCosts;
				break;
			case 'margin':
				margin = parseFloat(value);
				document.getElementById('marginInput').innerHTML = margin + "%";
				break;
		}
		
	var averageCost = 90;
	var hiringTaxes = 0.76;
	var incomeTaxes = 0.18;

	finalCost = (duration * averageCost * (1 + hiringTaxes)) + otherCosts;
		document.getElementById('finalCost').innerHTML = "R$" + finalCost.toFixed(2);
		

	finalPrice = finalCost/((1 - incomeTaxes) - (margin/100));
		document.getElementById('finalPrice').innerHTML = "R$" + finalPrice.toFixed(2);

	});


})();
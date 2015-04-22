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
				document.getElementById('durationInput').innerHTML = duration;
				break;
			case 'othercosts':
				otherCosts = parseFloat(value);
				document.getElementById('otherInput').innerHTML = otherCosts;
				break;
			case 'margin':
				margin = parseFloat(value);
				document.getElementById('marginInput').innerHTML = margin;
				break;
		}
		
		
	finalCost = (duration * 90 * 1.7) + otherCosts;
		document.getElementById('finalCost').innerHTML = finalCost;
		
	
	margin = resources * duration;
		document.getElementById('marginInput').innerHTML = margin;

	});


})();
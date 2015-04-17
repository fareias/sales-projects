(function() {
	var form = document.getElementById('myform'),
		resources,
		client,
		timing,
		otherCosts,
		margin;

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
			case 'timing':
				timing = parseFloat(value);
				document.getElementById('timingInput').innerHTML = timing;
				break;
			case 'othercosts':
				otherCosts = parseFloat(value);
				document.getElementById('otherInput').innerHTML = otherCosts;
				break;
		}
		
		margin = resources * timing;
		document.getElementById('marginOutput').innerHTML = margin;
	});
})();
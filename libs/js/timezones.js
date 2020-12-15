$('#timezonebtn').click(function() {

	$.ajax({
		url: "libs/php/gettimezones.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry2').val(),
			lang: $('#selLanguage2').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#continent1').html(result['data'][0]['continent']);
				$('#countryName').html(result['data'][0]['countryName']);
				$('#north').html(result['data'][0]['north']);
				$('#east').html(result['data'][0]['east']);
				$('#west').html(result['data'][0]['west']);
				$('#south').html(result['data'][0]['south']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});
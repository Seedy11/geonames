$('#oceanbtn').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry3').val(),
            lang: $('#selLanguage3').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#currencyCode3').html(result['data'][0]['currencyCode']);
                $('#countryCode3').html(result['data'][0]['countryCode']);
                $('#fipsCode3').html(result['data'][0]['fipsCode']);
                $('#countryName3').html(result['data'][0]['countryName']);
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});
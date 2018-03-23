    'use strict'
    function initMap() {
        var uluru = {lat: 59.9388068, lng: 30.3230066};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
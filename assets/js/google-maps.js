function initMap() {
    
    var myLatLng = {lat: 27.740931221346834,  lng: 85.40082311036772};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kathmandu,Nepal' 
    });
}

var map;
var x;
var y;
function initialize(lat, long) {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(lat, long)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


    if (lat =="61.0545" && long == "28.1760")  {


            // -------------- MARKER 4 --- Loas Office
                var marker4 = new google.maps.Marker({
                position: new google.maps.LatLng(61.054590, 28.176098),
                map: map /*,
                icon: 'img/bike5.png' */
                });

            // MARKER 4'S INFO WINDOW
                var infowindow4 = new google.maps.InfoWindow({
                content:'<strong>LOAS Office</strong><br/><br />Submit Tenacy Agreement by 1 March 2014<br /><a href="http://www.loas.fi/Kiinteasivu.asp?KiinteaSivuID=239&NakymaID=7" target="_blank">Apply for LOAS Apartment</a>'
                });
                // End of infowindow code

                // Adding a click event to the marker
                google.maps.event.addListener(marker4, 'click', function() {
                // Calling the open method of the infoWindow
                infowindow4.open(map, marker4);
                });
                // -------- END OF 4th MARKER

        }
        else if (lat =="61.0647" && long == "28.0947")  {


        // -------------- MARKER 1  --University
        var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(61.0647722, 28.0947139),
        map: map /*,
        icon: 'img/bike5.png' */
        });


        // MARKER 1'S INFO WINDOW
        var infowindow1 = new google.maps.InfoWindow({
        content: '<strong>LUT University</strong><br />Events:<br />1.Registration  08:00-17:00<br />2.Orientation 10:00 <br />3.Origo Desk 09:00-17:00 <br /> <br /><a href="http://www.lut.fi" target="_blank">LUT Website</a>'
        });
        // End of infowindow code

        // Adding a click event to the marker
        google.maps.event.addListener(marker1, 'click', function() {
        // Calling the open method of the infoWindow
        infowindow1.open(map, marker1);
        });
        // -------- END OF 1st MARKER

    }
    else if (lat =="61.0581" && long == "28.1901")  {


        // -------------- MARKER 9  ---Police station
            var marker9 = new google.maps.Marker({
            position: new google.maps.LatLng(61.058166, 28.190164),
            map: map /*,
            icon: 'img/bike5.png' */
            });

            // MARKER 9'S INFO WINDOW
            var infowindow9 = new google.maps.InfoWindow({
            content:'<strong>Police Station</strong><br/><br />The station is in the city center <br /> Students can do the registration with Maistrati here<br/>Opening hours: 9-15 everyday  <br/>'
            });
            // End of infowindow code

            // Adding a click event to the marker
            google.maps.event.addListener(marker9, 'click', function() {
            // Calling the open method of the infoWindow
            infowindow9.open(map, marker9);
            });
            // -------- END OF 9th MARKER

}
    else if (lat =="61.0496" && long == "28.1359")  {


        // -------------- MARKER 10  ---Karankokatu
            var marker10 = new google.maps.Marker({
            position: new google.maps.LatLng(61.0496472, 28.1359056),
            map: map /*,
            icon: 'img/bike5.png' */
            });

            // MARKER 10'S INFO WINDOW
            var infowindow10 = new google.maps.InfoWindow({
            content:'<strong>Karankokatu 4 Student Residence</strong><br/><br />Saunas, club room and laundry room<br/>Public Bus to University: Line 1, 3,5<br /><a href="http://www.loas.fi/Kiinteasivu.asp?KiinteaSivuID=339&NakymaID=7" target="_blank">Karankokatu Information Website</a>'
            });
            // End of infowindow code

            // Adding a click event to the marker
            google.maps.event.addListener(marker10, 'click', function() {
            // Calling the open method of the infoWindow
            infowindow10.open(map, marker10);
            });
            // -------- END OF 10th MARKER

}
    else if (lat =="61.0598" && long == "28.1018")  {


        // -------------- MARKER 10  ---Punkkerikatu
            var marker11 = new google.maps.Marker({
            position: new google.maps.LatLng(61.0598194, 28.1018861),
            map: map /*,
            icon: 'img/bike5.png' */
            });

            // MARKER 10'S INFO WINDOW
            var infowindow11 = new google.maps.InfoWindow({
            content: '<strong>Punkkerikatu 2 Student Residence</strong><br />Saunas and laundry room<br />A bus stop near to the building in Skinnarilankatu<br /><a href="http://www.loas.fi/Kiinteasivu.asp?KiinteaSivuID=322&NakymaID=7"target="_blank">Punkkerikatu 2 Information Website</a>'
            });
            // End of infowindow code

            // Adding a click event to the marker
            google.maps.event.addListener(marker11, 'click', function() {
            // Calling the open method of the infoWindow
            infowindow11.open(map, marker11);
            });
            // -------- END OF 10th MARKER

}
    else if (lat =="61.0582" && long == "28.1902")  {

        // -------------- MARKER 9  ---Police station
            var marker12 = new google.maps.Marker({
            position: new google.maps.LatLng(61.058166, 28.190164),
            map: map /*,
            icon: 'img/bike5.png' */
            });

            // MARKER 9'S INFO WINDOW
            var infowindow12 = new google.maps.InfoWindow({
            content:'<strong>Maistrati</strong><br/><br />City Registration<br /> palaute.etela-karjala@poliisi.fi <br/>'
            });
            // End of infowindow code

            // Adding a click event to the marker
            google.maps.event.addListener(marker12, 'click', function() {
            // Calling the open method of the infoWindow
            infowindow12.open(map, marker12);
            });
            // -------- END OF 9th MARKER

}
    else if (lat =="61.0507" && long == "28.1783")  {

        // -------------- MARKER 13  --- Supermarket
            var marker13 = new google.maps.Marker({
            position: new google.maps.LatLng(61.050727, 28.178387),
            map: map /*,
            icon: 'img/bike5.png' */
            });

            // MARKER 9'S INFO WINDOW
            var infowindow13 = new google.maps.InfoWindow({
            content:'<strong>PRISMA Supermarket</strong><br/><br />Take Bus Line 1 from University <br /> Opening Hours: Mon-Fri 8-21, Sat 8-18, Sun 12-18<br/><a href ="http://www.prisma.fi/market/prisma?a_Visit:etusivu=&paikkakunta=Lappeenranta&osuuskauppa=EEKOO&myymala=Prisma+Lappeenranta&pageName=Main" target="_blank">Prisma Website</a>'
            });
            // End of infowindow code

            // Adding a click event to the marker
            google.maps.event.addListener(marker13, 'click', function() {
            // Calling the open method of the infoWindow
            infowindow13.open(map, marker13);
            });
            // -------- END OF 13th MARKER

        // -------------- MARKER 14  --- Supermarket
            var marker14 = new google.maps.Marker({
            position: new google.maps.LatLng(61.0499389, 28.1764278),
            map: map /*,
            icon: 'img/bike5.png' */
            });

            // MARKER 9'S INFO WINDOW
            var infowindow14 = new google.maps.InfoWindow({
            content:'<strong>LIDL Supermarket</strong><br/><br />Take Bus Line 1 from University <br /> Opening Hours: Mon-Fri 7-21, Sat 7-18, Sun 12-18<br/>'
            });
            // End of infowindow code

            // Adding a click event to the marker
            google.maps.event.addListener(marker14, 'click', function() {
            // Calling the open method of the infoWindow
            infowindow14.open(map, marker14);
            });
            // -------- END OF 14th MARKER

}  else if (lat =="61.0483" && long == "28.1947")  {

        // -------------- MARKER 5--- Railway Station
            var marker5 = new google.maps.Marker({
            position: new google.maps.LatLng(61.048311, 28.194759),
            map: map /*,
            icon: 'img/bike5.png' */
            });

        // MARKER 5'S INFO WINDOW
            var infowindow5 = new google.maps.InfoWindow({
            content:'<strong>Lappeenranta Railway Station</strong><br/><br />Take Bus 5 from City Centre to reach Railway Station<br/>Get VR Discount card for 8 Eur<br/> <a href="http://www.vr.fi/en/index.html" target="_blank">Railway Website:Book Tickets</a>'
            });
            // End of infowindow code

            // Adding a click event to the marker
            google.maps.event.addListener(marker5, 'click', function() {
            // Calling the open method of the infoWindow
            infowindow5.open(map, marker5);
            });
            // -------- END OF 5th MARKER

}


}

google.maps.event.addDomListener(window, 'load', initialize);


//(-34.397, 150.644)

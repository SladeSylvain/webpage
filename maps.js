
  function initMap() {
    // Coordenadas de tu tienda (latitud, longitud)
    var tienda = { lat: -34.397, lng: 150.644 }; 

    // Crea el mapa y centra en la ubicación de la tienda
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: tienda
    });

    // Añade un marcador en la ubicación de la tienda
    var marker = new google.maps.Marker({
      position: tienda,
      map: map,
      title: 'Tu Tienda'
    });
  }

  // Ejecuta la función cuando se carga la página
  window.onload = initMap;

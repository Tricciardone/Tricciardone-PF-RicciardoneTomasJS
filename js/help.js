$(document).ready(function() {
  // Cuando la página carga, realiza una solicitud fetch al servidor para obtener la información de ayuda
  fetch('help.json')
    .then(response => {
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error al cargar la información de ayuda.');
      }
      // Parsear la respuesta JSON
      return response.json();
    })
    .then(data => {
      // Éxito: La solicitud se completó correctamente
      mostrarInformacionAyuda(data);
    })
    .catch(error => {
      // Error: La solicitud no se completó correctamente
      console.error(error);
    });

  function mostrarInformacionAyuda(data) {
    var ayudaContainer = $('#ayuda-container');

    // Itera sobre las preguntas frecuentes y muestra la información en la página
    for (var i = 0; i < data.preguntasFrecuentes.length; i++) {
      var pregunta = data.preguntasFrecuentes[i];
      
      ayudaContainer.append('<h3>' + pregunta.pregunta + '</h3>');
      
      // Maneja el caso especial de la pregunta sobre cambios que contiene una lista ordenada
      if (pregunta.pregunta === 'Puedo realizar cambios?') {
        var cambiosList = '<ol class="cambios">';
        for (var j = 0; j < pregunta.respuesta.length; j++) {
          cambiosList += '<li>' + pregunta.respuesta[j] + '</li>';
        }
        cambiosList += '</ol>';
        ayudaContainer.append(cambiosList);
      } else {
        // Para otras preguntas, simplemente agrega el párrafo de respuesta
        ayudaContainer.append('<p>' + pregunta.respuesta + '</p>');
      }

      // Agrega espacio entre preguntas
      ayudaContainer.append('<br><br>');
    }
  }
});

$(function () {
  // métodos de jQuery...
});

//FUNNCION JQUERY SMOOTH SCROLL OK
$(function () {
  // métodos de jQuery...
  $(document).ready(function () {
    // Agrega un desplazamiento suave a todos los enlaces
    $("a").on("click", function (event) {
      // Asegurese que this.hash tenga un valor antes de anular el comportamiento predeterminado
      if (this.hash !== "") {
        // Evita el comportamiento predeterminado del click
        event.preventDefault();

        // Almacenar hash
        var gato = this.hash;

        // Usando el metodo animate () de jQuery para agregar un desplazamiento de pagina suave
        /*El numero opcional 800 especifica la cantidad de milisegundos que se necesitan para
          para desplazarse al area especificada */
        $("html, body").animate(
          {
            scrollTop: $(gato).offset().top,
          },
          800,
          function () {
            /* Agregue hash (#) a la URL cuando termine de desplazarse
              (comportamiento de clic predeterminado)*/
            window.location.hash = gato;
          }
        );
      } // End if
    });
  });
});

//FUNCION TOOLTIP OK
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function validarEmail(valor) {
    if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }

$(document).ready(function() {
    
    $("#rioclaro").click(function() {
        $("#detalles-rio-claro").toggle();
        $("#detalles-arauco").hide();
        $("#detalles-grafital").hide();
      });
    
    $("#arauco").click(function() {
        $("#detalles-arauco").toggle();
        $("#detalles-grafital").hide();
        $("#detalles-rio-claro").hide();
    });
    
    $("#grafital").click(function() {
        $("#detalles-grafital").toggle();
        $("#detalles-arauco").hide();
        $("#detalles-rio-claro").hide();
    });
    

    $("#inicio").click(function() {
        $("#acerca-de").show();
        $("#laborales").hide();
            $("#academicos").hide();
            $("#mis-proyectos").hide();
            $("#detalles-arauco").hide();
        $("#detalles-rio-claro").hide();
        $("#detalles-grafital").hide();

    }); 
    $("#exp-laboral").click(function() {
        $("#laborales").show();
            $("#academicos").hide();
            $("#mis-proyectos").hide();
            $("#acerca-de").hide();
            $("#detalles-arauco").hide();
        $("#detalles-rio-claro").hide();
        $("#detalles-grafital").hide();

    });

    $("#f-academica").click(function() {
        $("#academicos").show();
            $("#laborales").hide();
            $("#mis-proyectos").hide();
            $("#acerca-de").hide();
            $("#detalles-arauco").hide();
        $("#detalles-rio-claro").hide();
        $("#detalles-grafital").hide();
    
    });

    $("#proyectos").click(function() {
        $("#mis-proyectos").show();
            $("#academicos").hide();
            $("#laborales").hide();
            $("#acerca-de").hide();
            $("#detalles-arauco").hide();
        $("#detalles-rio-claro").hide();
        $("#detalles-grafital").hide();
        
    });

    $(".btn-close").click(function() {
          $(".detalles").hide();
      });

      const myCarouselElement = document.querySelector('#myCarousel')

      const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 6000,
        touch: false
      })

      $(".btnGrande").click(function() {
        var p1 = document.getElementById("email").value;
        validarEmail(p1)
    });

      
    });

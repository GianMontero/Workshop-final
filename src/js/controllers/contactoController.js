function contactoController() {

/////////////////////////VALIDAR NOMBRE//////////////////////////////
   $("#nombre").on("keyup", function(input){



   var validacion = $(event.target)


   if (!validacion.val()) {
     validacion.removeClass('valid')
     validacion.addClass('invalid')
     $("#error_nombre_incorrecto").html("Campo requerido")
     $("#error_nombre_incorrecto").css("color", "red")
   } else {
     validacion.removeClass('invalid')
     validacion.addClass('valid')
     $("#error_nombre_incorrecto").html("")

     if (!isNaN(validacion.val())) {
       validacion.removeClass('valid')
       validacion.addClass('invalid')
       $("#error_nombre_incorrecto").html("El nombre no debe contener números")
       $("#error_nombre_incorrecto").css("color", "red")
     }else {
       validacion.removeClass('invalid')
       validacion.addClass('valid')
       $("#error_nombre_incorrecto").html("")
     }
   }


   })

/////////////////////////VALIDAR E-MAIL///////////////////////////////
   $("#email").on("keyup", function(){


   var validacion = $(event.target)

//SI ESTA VACIO
   if (!validacion.val()) {
     validacion.removeClass('valid')
     validacion.addClass('invalid')
     $("#error_email_incorrecto").html("Campo requerido")
     $("#error_email_incorrecto").css("color", "red")
   }else {
     validacion.removeClass('invalid')
     validacion.addClass('valid')
     $("#error_email_incorrecto").html("")

//SI LE FALTA ARROBA Y PUNTO
     if (validacion.val().indexOf("@") === -1 && validacion.val().indexOf(".") === -1) {
       validacion.removeClass('valid')
       validacion.addClass('invalid')
       $("#error_email_incorrecto").html("Debe contener arroba (@) y debe contener punto (.)")
       $("#error_email_incorrecto").css("color", "red")
     } else {
       validacion.removeClass('invalid')
       validacion.addClass('valid')
       $("#error_email_incorrecto").html("")


//SI LE FALTA PUNTO
       if (validacion.val().indexOf(".") === -1) {
         validacion.removeClass('valid')
         validacion.addClass('invalid')
         $("#error_email_incorrecto").html("Debe contener punto (.)")
         $("#error_email_incorrecto").css("color", "red")
       }else {
         validacion.removeClass('invalid')
         validacion.addClass('valid')
         $("#error_email_incorrecto").html("")
       }
     }
   }

   })

/////////////////////VALIDAR COMENTARIOS//////////////////////////
   $("#comment").on("keyup", function(){


   var validacion = $(event.target)


   if (!validacion.val()) {
     validacion.removeClass('valid')
     validacion.addClass('invalid')
     $("#error_comentario_incorrecto").html("Campo requerido")
     $("#error_comentario_incorrecto").css("color", "red")
   } else {
     validacion.removeClass('invalid')
     validacion.addClass('valid')
     $("#error_comentario_incorrecto").html("")
   }

 })

/////////////////////////HABILITAR BOTON//////////////////////////////////
    $("div").on("keyup", function(){

      var nombre = $("#nombre").val()
      var email = $("#email").val()
      var comentario = $("#comment").val()

      if ((nombre !== null && nombre !== "") && (email.indexOf("@") !== -1 && email.indexOf(".") !== -1)
          && (comentario !== null && comentario !== "")) {
        $("#boton").attr("disabled", false)
        $("#boton").css("background-color", "black")
      }else {
        $("#boton").attr("disabled", true)
        $("#boton").css("background-color", "#808080")
      }


    })



     $("button").on("click", function(){

       $("#root").load("./partials/home.html")

     })


}

export default contactoController

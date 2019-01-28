function personajeController(){

var numero = 1;

function getData (url, cbk) {

  $.ajax(url)

    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })


  }

getData("https://swapi.co/api/people/?format=json", mostrarDatos)
getData("https://swapi.co/api/people/?format=json&page=2", mostrarDos)


function mostrarDatos(error, data) {



  if (error) {
    console.log(error)
  }



  if(data) {
    data.results.forEach(function(item, index) {
      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button" class="save" id="${index}">Guardar</button></th>`)

      $("#tabla").append(tr)

    });

    $(".save").on("click", function(event) {
      console.log(data.results[event.target.id]);
    });
  }
}




function mostrarDos(error, data) {

$("#verMas").one("click", function(){

  if (error) {
    console.log(error)
  }

  if(data){


  data.results.forEach(function(item){

    var tr = $("<tr></tr>")

    tr.append(`<th>${numero++}</th>`)
    tr.append(`<th>${item.name}</th>`)
    tr.append(`<th>${item.gender}</th>`)
    tr.append(`<th>${item.height}cm</th>`)
    tr.append(`<th>${item.mass}kg</th>`)
    tr.append(`<th>${item.eye_color}</th>`)
    tr.append(`<th><button type="button">Guardar</button></th>`)


   $("#tabla").append(tr)

   $(".show2").remove()

   })

  getData("https://swapi.co/api/people/?page=3&format=json", mostrarTres)

   }
 })
}


function mostrarTres(error, data){

  $(".pos").append('<button align="center" id="verTres" class="show3" style="background-color:#008B8B; border-color: #008B8B">ver mas</button>')

  $("#verTres").one("click", function(){

    if (error) {
      console.log(error)
    }

    if(data){

    data.results.forEach(function(item){

      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button">Guardar</button></th>`)


     $("#tabla").append(tr)

     $(".show3").remove()

    })

    getData("https://swapi.co/api/people/?format=json&page=4", mostrarCuatro)

   }
 })
}

function mostrarCuatro(error, data){

  $(".pos").append('<button align="center" id="verCuatro" class="show4" style="background-color:#008B8B; border-color: #008B8B">ver mas</button>')

  $("#verCuatro").one("click", function(){

    if (error) {
      console.log(error)
    }

    if(data){

    data.results.forEach(function(item){

      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button">Guardar</button></th>`)


     $("#tabla").append(tr)

     $(".show4").remove()

    })

    getData("https://swapi.co/api/people/?format=json&page=5", mostrarCinco)

   }
 })
}


function mostrarCinco(error, data){

  $(".pos").append('<button align="center" id="verCinco" class="show5" style="background-color:#008B8B; border-color: #008B8B">ver mas</button>')

  $("#verCinco").one("click", function(){

    if (error) {
      console.log(error)
    }

    if(data){

    data.results.forEach(function(item){

      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button">Guardar</button></th>`)


     $("#tabla").append(tr)

     $(".show5").remove()

    })

    getData("https://swapi.co/api/people/?format=json&page=6", mostrarSeis)

   }
 })
}


function mostrarSeis(error, data){

  $(".pos").append('<button align="center" id="verSeis" class="show6" style="background-color:#008B8B; border-color: #008B8B">ver mas</button>')

  $("#verSeis").one("click", function(){

    if (error) {
      console.log(error)
    }

    if(data){

    data.results.forEach(function(item){

      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button">Guardar</button></th>`)


     $("#tabla").append(tr)

     $(".show6").remove()

    })

    getData("https://swapi.co/api/people/?format=json&page=7", mostrarSiete)

   }
 })
}


function mostrarSiete(error, data){

  $(".pos").append('<button align="center" id="verSiete" class="show7" style="background-color:#008B8B; border-color: #008B8B">ver mas</button>')

  $("#verSiete").one("click", function(){

    if (error) {
      console.log(error)
    }

    if(data){

    data.results.forEach(function(item){

      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button">Guardar</button></th>`)


     $("#tabla").append(tr)

     $(".show7").remove()

    })

    getData("https://swapi.co/api/people/?format=json&page=8", mostrarOcho)

   }
 })
}


function mostrarOcho(error, data){

  $(".pos").append('<button align="center" id="verOcho" class="show8" style="background-color:#008B8B; border-color: #008B8B">ver mas</button>')

  $("#verOcho").one("click", function(){

    if (error) {
      console.log(error)
    }

    if(data){

    data.results.forEach(function(item){

      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button">Guardar</button></th>`)


     $("#tabla").append(tr)

     $(".show8").remove()

    })

    getData("https://swapi.co/api/people/?format=json&page=9", mostrarNueve)

   }
 })
}


function mostrarNueve(error, data){

  $(".pos").append('<button align="center" id="verNueve" class="show9" style="background-color:#008B8B; border-color: #008B8B">ver mas</button>')

  $("#verNueve").one("click", function(){

    if (error) {
      console.log(error)
    }

    if(data){

    data.results.forEach(function(item){

      var tr = $("<tr></tr>")

      tr.append(`<th>${numero++}</th>`)
      tr.append(`<th>${item.name}</th>`)
      tr.append(`<th>${item.gender}</th>`)
      tr.append(`<th>${item.height}cm</th>`)
      tr.append(`<th>${item.mass}kg</th>`)
      tr.append(`<th>${item.eye_color}</th>`)
      tr.append(`<th><button type="button">Guardar</button></th>`)


     $("#tabla").append(tr)

     $(".show9").remove()

    })
   }
 })
}



}


export default personajeController

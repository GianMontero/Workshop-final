import crossroads from 'crossroads'
//import homeController from './controllers/homeController'
import contactoController from './controllers/contactoController'
import personajeController from './controllers/personajeController'

crossroads.addRoute("#/", function () {
$("#root").load("./partials/home.html")
})

crossroads.addRoute("#/people", function () {
$("#root").load("./partials/personaje.html", personajeController)
})

/*$("#botonPj").on("click", function () {
$("#root").load("./partials/personaje.html")
})*/

crossroads.addRoute("#/local-storage", function () {
$("#root").load("./partials/guardado.html")
})

/*$("#botonGu").on("click", function () {
$("#root").load("./partials/guardado.html")
})*/

crossroads.addRoute("#/contact", function () {
$("#root").load("./partials/contacto.html", contactoController)
})

/*$("#botonCo").on("click", function () {
$("#root").load("./partials/contacto.html")
})*/

crossroads.addRoute("#/personajes", function () {
console.log("Pagina de personajes")
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
	crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash) // necesario para que puedan funcionar varias paginas desde una sola

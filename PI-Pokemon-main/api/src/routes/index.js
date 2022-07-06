const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const pokeRoute = require('./pokes');
const typesRoute = require('./types');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokeRoute);
router.use('/types', typesRoute);

module.exports = router;


/* 
[ ] GET /pokemons:
Obtener un listado de los pokemons desde pokeapi.
Debe devolver solo los datos necesarios para la ruta principal
[ ] GET /pokemons/{idPokemon}:
Obtener el detalle de un pokemon en particular
Debe traer solo los datos pedidos en la ruta de detalle de pokemon
Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
[ ] GET /pokemons?name="...":
Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
Si no existe ningún pokemon mostrar un mensaje adecuado
[ ] POST /pokemons:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
Crea un pokemon en la base de datos relacionado con sus tipos.
[ ] GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
*/
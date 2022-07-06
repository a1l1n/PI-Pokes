const { Router } = require('express');
const { getTypes } = require('../Controllers/TypeControllers');
const router = Router();

router.get('/', getTypes);

module.exports = router;

/* 
GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
*/
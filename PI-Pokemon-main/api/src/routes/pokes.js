const { Router } = require('express');
const { getPokes, getPokeId, postPoke } = require('../Controllers/PokeControllers');
const router = Router();

router.get('/', getPokes);
router.get('/:id', getPokeId);
router.post('/', postPoke);

module.exports = router;
const router = require('express').Router();
const controller = require('../controllers/IngredientController');

router.get('/', controller.GetIngredients);
router.post('/', controller.CreateIngredient);
router.get('/:name', controller.GetIngredientByName);
router.put('/:name', controller.UpdateIngredient);
router.delete('/:name', controller.DeleteIngredient);

module.exports = router;

const router = require('express').Router();
const controller = require('../controllers/IngredientController');

router.get('/', controller.GetIngredients);
router.post('/', controller.CreateIngredient);
router.get('/:id', controller.GetIngredient);
router.put('/:id', controller.UpdateIngredient);
router.delete('/:id', controller.DeleteIngredient);

module.exports = router;

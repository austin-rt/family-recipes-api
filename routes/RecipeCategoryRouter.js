const router = require('express').Router();
const controller = require('../controllers/RecipeCategoryController');

router.get('/', controller.GetRecipeCategories);
router.post('/', controller.CreateRecipeCategory);
router.get('/:name', controller.GetRecipeCategoryByName);
router.put('/:name', controller.UpdateRecipeCategory);
router.delete('/:name', controller.DeleteRecipeCategory);

module.exports = router;

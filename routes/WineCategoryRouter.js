const router = require('express').Router();
const controller = require('../controllers/WineCategoryController');

router.get('/', controller.GetWineCategories);
router.post('/', controller.CreateWineCategory);
router.get('/:name', controller.GetWineCategoryByName);
router.put('/:name', controller.UpdateWineCategory);
router.delete('/:name', controller.DeleteWineCategory);

module.exports = router;

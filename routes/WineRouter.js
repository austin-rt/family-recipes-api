const router = require('express').Router();
const controller = require('../controllers/WineController');

router.get('/', controller.GetWines);
router.post('/', controller.CreateWine);
router.get('/:name', controller.GetWineByName);
router.put('/:name', controller.UpdateWine);
router.delete('/:name', controller.DeleteWine);

module.exports = router;

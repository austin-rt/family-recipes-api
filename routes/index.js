const router = require('express').Router();

const IngredientRouter = require('./IngredientRouter');
const RecipeCategoryRouter = require('./RecipeCategoryRouter');

router.use('/ingredients', IngredientRouter);
router.use('/recipe-categories', RecipeCategoryRouter);
// router.use('/recipes', RecipeRouter);
// router.use('/wine-categories', WineCategoriesRouter);
// router.use('/wines', WineRouter);
// router.use('/auth', AuthRouter);

router.get('/', (req, res) => res.send({ msg: '/api route' }));

module.exports = router;

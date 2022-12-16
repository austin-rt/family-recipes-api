const router = require('express').Router();

const IngredientRouter = require('./IngredientRouter');
const RecipeCategoryRouter = require('./RecipeCategoryRouter');
const WineCategoriesRouter = require('./WineCategoryRouter');
const WineRouter = require('./WineRouter');
// const RecipeRouter = require('./RecipeRouter');
// const AuthRouter = require('./AuthRouter');

router.use('/ingredients', IngredientRouter);
router.use('/recipe-categories', RecipeCategoryRouter);
router.use('/wine-categories', WineCategoriesRouter);
router.use('/wines', WineRouter);
// router.use('/recipes', RecipeRouter);
// router.use('/auth', AuthRouter);

router.get('/', (req, res) => res.send({ msg: '/api route' }));

module.exports = router;

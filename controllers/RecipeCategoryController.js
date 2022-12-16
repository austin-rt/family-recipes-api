const { RecipeCategory } = require('../models');

const GetRecipeCategories = async (req, res) => {
  try {
    const recipeCategories = await RecipeCategory.find();
    return res.status(200).json({ recipeCategories });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const CreateRecipeCategory = async (req, res) => {
  try {
    const recipeCategory = await new RecipeCategory(req.body);
    await recipeCategory.save();
    return res.status(201).json({
      recipeCategory,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const GetRecipeCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const recipeCategory = await RecipeCategory.findOne({ name: name });
    if (recipeCategory) {
      return res.status(200).json({ recipeCategory });
    }
    return res.status(404).send({ msg: `${name} does not exist in recipe categories` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const UpdateRecipeCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const recipeCategory = await RecipeCategory.findOneAndUpdate({ name: name }, req.body, {
      new: true,
    });
    if (recipeCategory) {
      return res.status(200).json({ recipeCategory });
    }
    throw new Error({ msg: `${name} not found in recipe categories` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const DeleteRecipeCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const deleted = await RecipeCategory.findOneAndDelete({ name: name });
    if (deleted) {
      return res.status(200).send({ msg: `${name} deleted from recipe categories` });
    }
    throw new Error(`${name} not found in recipe categories`);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  GetRecipeCategories,
  CreateRecipeCategory,
  GetRecipeCategoryByName,
  UpdateRecipeCategory,
  DeleteRecipeCategory,
};

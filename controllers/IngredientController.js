const { Ingredient } = require('../models');

const GetIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    return res.status(200).json({ ingredients });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const CreateIngredient = async (req, res) => {
  try {
    const ingredient = await new Ingredient(req.body);
    await ingredient.save();
    return res.status(201).json({
      ingredient,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const GetIngredientByName = async (req, res) => {
  try {
    const { name } = req.params;
    const ingredient = await Ingredient.findOne({ name: name });
    if (ingredient) {
      return res.status(200).json({ ingredient });
    }
    return res.status(404).send({ msg: `${name} does not exist in ingredients` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const UpdateIngredient = async (req, res) => {
  try {
    const { name } = req.params;
    const ingredient = await Ingredient.findOneAndUpdate({ name: name }, req.body, { new: true });
    if (ingredient) {
      return res.status(200).json({ ingredient });
    }
    throw new Error({ msg: `${name} not found in ingredients` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const DeleteIngredient = async (req, res) => {
  try {
    const { name } = req.params;
    const deleted = await Ingredient.findOneAndDelete({ name: name });
    if (deleted) {
      return res.status(200).send({ msg: `${name} deleted from ingredients` });
    }
    throw new Error({ msg: `${name} not found` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  GetIngredients,
  CreateIngredient,
  GetIngredientByName,
  UpdateIngredient,
  DeleteIngredient,
};

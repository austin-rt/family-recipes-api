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

const GetIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findById(id);
    if (ingredient) {
      return res.status(200).json({ ingredient });
    }
    return res.status(404).send('Ingredient with the specified ID does not exist');
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const UpdateIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    await Ingredient.findByIdAndUpdate(id, req.body, { new: true }, (err, ingredient) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!ingredient) {
        res.status(500).send(`Ingredient with id: ${id} not found`);
      }
      return res.status(200).json(ingredient);
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const DeleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ingredient.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send(`Deleted ingredient with id: ${id}`);
    }
    throw new Error('Ingredient not found');
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  GetIngredients,
  CreateIngredient,
  GetIngredient,
  UpdateIngredient,
  DeleteIngredient,
};

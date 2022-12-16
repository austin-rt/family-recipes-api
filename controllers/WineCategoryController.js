const { WineCategory } = require('../models');

const GetWineCategories = async (req, res) => {
  try {
    const wineCategories = await WineCategory.find();
    return res.status(200).json({ wineCategories });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const CreateWineCategory = async (req, res) => {
  try {
    const wineCategory = await new WineCategory(req.body);
    await wineCategory.save();
    return res.status(201).json({
      wineCategory,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const GetWineCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const wineCategory = await WineCategory.findOne({ name: name });
    if (wineCategory) {
      return res.status(200).json({ wineCategory });
    }
    return res.status(404).send({ msg: `${name} does not exist in wine categories` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const UpdateWineCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const wineCategory = await WineCategory.findOneAndUpdate({ name: name }, req.body, {
      new: true,
    });
    if (wineCategory) {
      return res.status(200).json({ wineCategory });
    }
    throw new Error({ msg: `${name} not found in wine categories` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const DeleteWineCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const deleted = await WineCategory.findOneAndDelete({ name: name });
    if (deleted) {
      return res.status(200).send({ msg: `${name} deleted from wine categories` });
    }
    throw new Error({ msg: `${name} not found in wine categories` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  GetWineCategories,
  CreateWineCategory,
  GetWineCategoryByName,
  UpdateWineCategory,
  DeleteWineCategory,
};

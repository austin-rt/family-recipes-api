const { Wine } = require('../models');

const GetWines = async (req, res) => {
  try {
    const wines = await Wine.find();
    return res.status(200).json({ wines });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const CreateWine = async (req, res) => {
  try {
    const rating = req.body.rating;
    const wine = await new Wine(req.body);
    await wine.save();
    return res.status(201).json({
      wine,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const GetWineByName = async (req, res) => {
  try {
    const { name } = req.params;
    const wine = await Wine.findOne({ name: name });
    if (wine) {
      return res.status(200).json({ wine });
    }
    return res.status(404).send({ msg: `${name} does not exist in wines` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const UpdateWine = async (req, res) => {
  try {
    const { name } = req.params;
    const wine = await Wine.findOneAndUpdate({ name: name }, req.body, { new: true });
    if (wine) {
      return res.status(200).json({ wine });
    }
    throw new Error({ msg: `${name} not found in wines` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const DeleteWine = async (req, res) => {
  try {
    const { name } = req.params;
    const deleted = await Wine.findOneAndDelete({ name: name });
    if (deleted) {
      return res.status(200).send({ msg: `${name} deleted from wines` });
    }
    throw new Error({ msg: `${name} not found in wines` });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  GetWines,
  CreateWine,
  GetWineByName,
  UpdateWine,
  DeleteWine,
};

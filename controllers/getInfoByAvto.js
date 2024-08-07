const { HttpError } = require("../helpers/index.js");
const { addDrlSrv, getDrlSrv } = require("../services/index.js");

const getDrlCtrl = async (req, res, next) => {
  try {
    const result = await getDrlSrv();
    if (!result) {
      throw HttpError(404); //"Not found"
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const addDrlCtrl = async (req, res, next) => {
  try {
    const result = await addDrlSrv(req.body);
    if (!result) {
      throw HttpError(404); //"Not found"
    }

    res.status(201).json(result);
  } catch (error) {}
};

module.exports = { getDrlCtrl, addDrlCtrl };

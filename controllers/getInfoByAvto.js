import { HttpError } from "../../helpers/index.js";

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

export { getDrlCtrl };

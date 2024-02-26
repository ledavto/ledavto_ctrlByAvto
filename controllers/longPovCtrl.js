import { addLongPovSrv } from "../services/index.js";

const addLongPovCtrl = async (req, res, next) => {
    try {
        // console.log(Object.values(req.body)[0]);
        // console.log(Object.keys(req.body));

        const newObj = [
            ...
            Object.keys(req.body).map((item, index) => {
                const newItem = {
                    "brandAvto": "Audi",
                    "modelAvto": item,
                    "versionCtrl": Object.values(req.body)[index][0],
                    "urlSchema": Object.values(req.body)[index][1],
                    "comment": "",
                    "visible":true
                };
                // await addLongPovSrv(newItem);
                return newItem;
            })
        ];
         console.log(newObj);
    
    if (!result) {
      throw HttpError(404); //"Not found"
    }

    res.status(201).json(result);
  } catch (error) {}
};

export { addLongPovCtrl };
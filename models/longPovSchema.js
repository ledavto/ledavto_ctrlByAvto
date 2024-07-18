const { Schema, model } = require("mongoose");
const Joi = require("joi");

const longPovSchema = new Schema(
  {
    brandAvto: {
      type: String,
      required: [true, "Set name for Brand"],
    },
    modelAvto: {
      type: String,
      required: [true, "Set name for Model"],
    },
    versionDrl: {
      type: String,
      required: [true, "Set name for Version"],
    },
    urlSchema: { type: String },
    comment: { type: String },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

//Для обработки ошибок валидации схемы и изменения статуса ошибки с 500 на 400
longPovSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const addLongPovSchema = Joi.object({
  // password: Joi.string().required(),
  // email: Joi.string().required(),
});

const schema = { addLongPovSchema };

const Longpov = model("longpov", longPovSchema);

module.exports = { Longpov, schema };

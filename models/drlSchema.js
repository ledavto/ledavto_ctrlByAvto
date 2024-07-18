const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { compare, genSalt, hash } = require("bcrypt");

const drlSchema = new Schema(
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
    // owner: {type: Types.ObjectId},
    // owner: {
    //   name: String,
    //   address: [String], // тип - масив рядків
    //   birthday: Date,
    // },
  },
  { versionKey: false, timestamps: true }
);

// drlSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const salt = await genSalt(10);
//   this.password = await hash(this.password, salt);

//   next();
// });

//Для обработки ошибок валидации схемы и изменения статуса ошибки с 500 на 400
drlSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

// drlSchema.methods.checkPassword = (candidate, passwordHash) =>
//   compare(candidate, passwordHash);

const addDrlSchema = Joi.object({
  // password: Joi.string().required(),
  // email: Joi.string().required(),
});

const schema = { addDrlSchema };

const Drl = model("drl", drlSchema);

module.exports = { Drl, schema };

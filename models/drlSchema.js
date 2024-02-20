import { Schema, model } from "mongoose";
import Joi from "joi";
import { compare, genSalt, hash } from "bcrypt";

const drlSchema = new Schema({}, { versionKey: false, timestamps: true });

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

export { Drl, schema };

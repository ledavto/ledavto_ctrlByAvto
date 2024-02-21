import { Drl } from "../models/drlSchema.js";

async function getDrlSrv() {
  //Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  return Drl.find({});
}

async function addDrlSrv(data) {
  const resAddDb = await Drl.create(data);
  console.log(resAddDb);
  return resAddDb;
}

export { getDrlSrv, addDrlSrv };

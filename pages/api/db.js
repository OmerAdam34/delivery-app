// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodb from "../../utils/mongodb";
import jsondb from "../../jsondb/products";
import Product from "../../models/Product";
// import { mongo } from "mongoose";

export default async function handler(req, res) {
  await mongodb.dbConnect();

  await Product.deleteMany();
  await Product.insertMany(jsondb.products);

  await mongodb.dbDisconnect();
  res.send({ text: "Data saved" });
}

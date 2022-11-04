// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodb from "../../utils/mongodb";
import Product from "../../models/Product";
import jsondb from "../../jsondb/products";

// import { mongo } from "mongoose";

export default async function handler(req, res) {
  await mongodb.dbConnect();

  await Product.deleteMany();
  await Product.insertMany(jsondb.products);
  const products = await Product.find({});

  await mongodb.dbDisconnect();
  res.send(products);
}

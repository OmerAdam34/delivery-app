import mongoose, { mongo } from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

async function dbConnect() {
  if (cached.con) {
    console.log("DB connection is active");
    return cached.con;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(process.env.MONGO_URI, options)
      .then((mongoose) => {
        console.log("DB connection start");
        return mongoose;
      });
  }
  cached.con = await cached.promise;
  return cached.con;
}

async function dbDisconnect() {
  await mongoose.disconnect();
  console.log("DB connection end");
}

const mongodb = { dbConnect, dbDisconnect };
export default mongodb;

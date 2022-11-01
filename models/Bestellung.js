import mongoose from "mongoose";

const BestellungSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    maxLength: 100,
  },
  address: {
    type: String,
    required: true,
    maxLength: 200,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  payment: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Bestellung ||
  mongoose.model("Bestellung", BestellungSchema);

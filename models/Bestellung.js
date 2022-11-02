import mongoose from "mongoose";

const BestellungSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 250,
    },
    category: {
      type: String,
      required: true,
      maxLength: 30,
    },
    price: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
      maxLength: 30,
      unique: true,
    },
    picture: {
      type: String,
      required: true,
    },
    extras: {
      type: [
        {
          text: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  }
  // {timestamps: true}
);

export default mongoose.models.Bestellung ||
  mongoose.model("Bestellung", BestellungSchema);

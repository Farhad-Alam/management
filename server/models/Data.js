import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: String,
  sector: String,
  term: String,
});

export const Data = mongoose.model("Data", dataSchema);

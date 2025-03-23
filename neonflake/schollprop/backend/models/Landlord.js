const mongoose = require("mongoose");

const landlordSchema = new mongoose.Schema(
  {
    city: String,
    type: String,
    bts: Boolean,
    phone: String,
    email: String,
    location: String,
    details: String,
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Landlord", landlordSchema, "landlords");
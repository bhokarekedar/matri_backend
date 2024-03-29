import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    isVerified: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    plan: {
      type: String,
      enum: ["free", "basic", "premium"],
      default: "free",
    },
    planExpiryDate: {
      type: Date,
      default: null,
    },
    forgotPasswordToken: {
      type: mongoose.Schema.Types.String,
    },
    forgotPasswordTokenExpiry: {
      type: mongoose.Schema.Types.String,
    },
    verifyToken: {
      type: mongoose.Schema.Types.String,
    },
    verifyTokenExpiry: {
      type: mongoose.Schema.Types.String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mernd");
    console.log("conesion esitosa");
  } catch (error) {
    console.error("no wacho todo mal", error);
  }
};

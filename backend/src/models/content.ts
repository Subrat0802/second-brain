import mongoose, { model } from "mongoose";

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ["Youtube", "Instagram", "X", "Facebook"],
    trim: true,
    required: function() {
        return !!this.link; 
    }
  },
  link: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  tag: [{
    type: String,
    trim: true,
    lowercase: true
  }]
}, { timestamps: true });

export const contentModel = model("Content", contentSchema);

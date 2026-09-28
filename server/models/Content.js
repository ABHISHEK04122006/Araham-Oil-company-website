import mongoose from 'mongoose';

const geometrySchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  order: { type: Number, default: 0 }
});

export const Geometry = mongoose.model('Geometry', geometrySchema);
export const FAQ = mongoose.model('FAQ', faqSchema);

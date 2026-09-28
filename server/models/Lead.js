import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  workEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  tankType: {
    type: String,
    default: 'crude'
  },
  source: {
    type: String,
    default: 'Website Technical Brochure Request'
  },
  status: {
    type: String,
    enum: ['New', 'In Review', 'Contacted'],
    default: 'New'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Lead', leadSchema);

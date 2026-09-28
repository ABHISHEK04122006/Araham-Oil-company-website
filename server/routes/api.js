import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// Fallback in-memory store if MongoDB is offline
const inMemoryLeads = [];

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Arham Oil MERN API',
    timestamp: new Date().toISOString()
  });
});

// Create new lead (Brochure / Demo request)
router.post('/leads', async (req, res) => {
  try {
    const { fullName, workEmail, companyName, tankType } = req.body;

    if (!fullName || !workEmail || !companyName) {
      return res.status(400).json({ error: 'Please provide full name, work email, and company.' });
    }

    try {
      // Attempt saving to MongoDB
      const newLead = new Lead({ fullName, workEmail, companyName, tankType });
      const savedLead = await newLead.save();
      return res.status(201).json({
        success: true,
        message: 'Lead successfully captured in MongoDB!',
        lead: savedLead
      });
    } catch (dbErr) {
      // Fallback to in-memory store
      console.warn('MongoDB save fallback:', dbErr.message);
      const fallbackLead = {
        _id: 'local_' + Date.now(),
        fullName,
        workEmail,
        companyName,
        tankType,
        createdAt: new Date()
      };
      inMemoryLeads.unshift(fallbackLead);
      return res.status(201).json({
        success: true,
        message: 'Lead captured successfully!',
        lead: fallbackLead
      });
    }
  } catch (error) {
    console.error('Lead error:', error);
    res.status(500).json({ error: 'Server error processing request.' });
  }
});

// Get all leads (Admin inspection)
router.get('/leads', async (req, res) => {
  try {
    let leads = [];
    try {
      leads = await Lead.find().sort({ createdAt: -1 });
    } catch (e) {
      leads = inMemoryLeads;
    }
    res.json({
      success: true,
      count: leads.length,
      leads
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leads.' });
  }
});

export default router;

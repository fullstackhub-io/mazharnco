const mongoose = require('mongoose');

// Menu Schema
const MenuSchema = mongoose.Schema({

  MenuName: {
    type: String,
    required: true,
    unique: true
  },
  MenuCode: {
    type: String,
    required: true,
    unique: true
  },
  MenuUrl: {
    type: String
  },
  MenuOrder: {
    type: Number,
    required: true,
    unique: true
  },
  DateAdded: {
    type: Date
  },
  DateUpdated: {
    type: Date
  },
  MenuType: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    required: true
  },
  ParentMenuCode: {
    type: String
  },
  GroupName:
  {
    type: String,
    required: true
  }
});

const Menu = module.exports = mongoose.model('menu', MenuSchema);
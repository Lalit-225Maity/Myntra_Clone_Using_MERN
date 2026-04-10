const { Schema, model } = require('mongoose');
const Product = new Schema({
    name: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  discountPrice: {
    type: Number
  },

  countInStock: {
    type: Number,
    required: true,
    default: 0
  },

  sku: {
    type: String,
    required: true,
    unique: true
  },

  category: {
    type: String,
    required: true
  },

  brand: {
    type: String
  },

  sizes: [
    {
      type: String
    }
  ],

  colors: [
    {
      type: String
    }
  ],

  collections: {
    type: String
  },

  material: {
    type: String
  },

  gender: {
    type: String,
    enum: ['Men', 'Women', 'Kids']
  },
  images_url:{
    type:String
  },

  rating: {
    type: Number,
    default: 0
  },

  numReviews: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
});
    
const Products=model('Product',Product);
module.exports=Products;
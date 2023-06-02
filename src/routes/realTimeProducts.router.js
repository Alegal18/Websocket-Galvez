import express from 'express';
import ProductManager from '../productManager.js';

const container = new ProductManager('./src/products.json');

export const productsRealTime = express.Router();

productsRealTime.get('/', async (req, res) => {
  try {
    const products = await container.getProducts();
    return res.status(200).render('realTimeProducts', { products });
  } catch (error) {
    console.log(error);
  }
});




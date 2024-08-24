import { PATH_TO_DB } from '../constants/products.js';
import countProducts from './countProducts.js';
import fs from 'node:fs/promises';

const removeRandomProduct = async () => {
  const num = await countProducts();
  const idx = Math.floor(Math.random() * num);
  const product = await fs.readFile(PATH_TO_DB, 'utf-8');
  if (!product) {
    return null;
  }
  const updatedList = JSON.parse(product).filter(
    (item, index) => index !== idx,
  );
  await fs.writeFile(PATH_TO_DB, JSON.stringify(updatedList), 'utf-8');
};

removeRandomProduct();

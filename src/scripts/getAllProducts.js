import * as fs from 'node:fs/promises';
import { PATH_TO_DB } from '../constants/products.js';

const getAllProducts = async () => {
  const products = await fs.readFile(PATH_TO_DB, 'utf-8');
  if (!products) {
    return null;
  }
  return JSON.parse(products);
};

console.log(await getAllProducts());

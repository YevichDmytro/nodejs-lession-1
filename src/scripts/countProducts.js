import { PATH_TO_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const countProducts = async () => {
  const product = await fs.readFile(PATH_TO_DB, 'utf-8');
  if (!product) {
    return null;
  }
  return await JSON.parse(product).length;
};

console.log('count:', await countProducts());

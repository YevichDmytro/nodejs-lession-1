import fs from 'node:fs/promises';

import { createFakeProduct } from '../utils/createFakerProduct.js';
import { PATH_TO_DB } from '../constants/products.js';

export const generateProducts = async (number) => {
  const currentProductsJSON = await fs.readFile(PATH_TO_DB, 'utf-8');

  const currentProducts = currentProductsJSON
    ? JSON.parse(currentProductsJSON)
    : [];

  const generatedProducts = Array(number).fill(0).map(createFakeProduct);

  const newProductList = [...currentProducts, ...generatedProducts];

  await fs.writeFile(PATH_TO_DB, JSON.stringify(newProductList));
};

generateProducts(3);

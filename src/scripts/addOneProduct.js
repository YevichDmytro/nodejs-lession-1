import * as fs from 'node:fs/promises';

import { PATH_TO_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakerProduct.js';

const addOneProduct = async () => {
  const currentProductsJSON = await fs.readFile(PATH_TO_DB, 'utf-8');

  const currentProducts = currentProductsJSON
    ? JSON.parse(currentProductsJSON)
    : [];

  const newProduct1 = createFakeProduct();
  currentProducts.push(newProduct1);

  await fs.writeFile(PATH_TO_DB, JSON.stringify(currentProducts));
};

addOneProduct();

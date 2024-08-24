import fs from 'node:fs/promises';

import { PATH_TO_DB } from '../constants/products.js';

const clearProducts = async () => {
  await fs.writeFile(PATH_TO_DB, JSON.stringify([]));
};

clearProducts();

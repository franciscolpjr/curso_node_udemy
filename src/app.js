import express from 'express';
import { userRouter } from '../src/modules/user/user.controller.js';
import { productRouter } from '../src/modules/product/product.controller.js';

const app = express();

app.use(userRouter);

app.use(productRouter);

app.listen(8080, () => {
  console.log('Servidor rodando.');
});

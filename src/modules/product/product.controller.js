import { Router } from 'express';

export const productRouter = Router();

const router = Router();

productRouter.use('/product', router);

router.get('/', function (req, res) {
    res.send('Hello World PRODUCT');
  });

router.get('/:product', function (req, res) {
res.send('Nome Produto');
});
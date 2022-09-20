import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default function validateOrders(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  const schema = Joi.object({
    productsIds: Joi.array().required(),
  });

  const { error } = schema.validate({ productsIds });
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.details[0].message });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}
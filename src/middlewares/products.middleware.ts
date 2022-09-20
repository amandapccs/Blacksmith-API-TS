import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = schema.validate({ name, amount });
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.details[0].message });
  }
  next();
}
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate({ username, password });
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}
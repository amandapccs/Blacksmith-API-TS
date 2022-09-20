import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const secret = 'secret';

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decode = verify(token, secret);
    if (!decode) return res.status(401).json({ message: 'Invalid token' });
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
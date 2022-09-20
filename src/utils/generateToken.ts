import { sign, SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

export default async function generateToken(userData: User) {
  const signInOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '4d',
  };

  const jwtSecret = 'secret';
  const token = sign({ data: userData }, jwtSecret, signInOptions);
  return token;
}
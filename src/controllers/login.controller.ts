import { Request, Response } from 'express';
// import { decode } from 'jsonwebtoken';
import LoginService from '../services/login.service';
import generateToken from '../utils/generateToken';

export default class LoginController {
  constructor(private service = new LoginService()) { }

  public async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await this.service.getCredentials(username, password);

    if (!user) return res.status(401).json({ message: 'Username or password invalid' });
    const token = await generateToken({ 
      username,
      classe: user?.classe,
      level: user?.level,
      password });
    return res.status(200).json({ token });
  }
}
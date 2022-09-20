import { Request, Response } from 'express';
import UserService from '../services/users.service';
import generateToken from '../utils/generateToken';

export default class UserController {
  constructor(private service = new UserService()) { }

  public async create(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    await this.service.create({ username, classe, level, password });
    const token = await generateToken({ username, classe, level, password });
    console.log('token ---->', token);
    return res.status(201).json({ token });
  }
}
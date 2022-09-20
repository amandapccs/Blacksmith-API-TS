import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { IUser } from '../interfaces/user.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getCredentials(email: string, password: string): Promise<IUser | null> {
    const user = await this.model.getCredentials(email, password);
    if (!user) return null;
    return user;
  }
}
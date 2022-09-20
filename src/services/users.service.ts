import connection from '../models/connection';
import UserModel from '../models/users.model';
import { User, IUser } from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<IUser> {
    const userCreated = await this.model.create(user);
    return userCreated;
  }

  public async getByUsername(user: any): Promise<IUser> {
    const { data: { username } } = user;
    const foundUser = await this.model.getByUsername(username);
    console.log('foundUser ------>', foundUser);
    return foundUser;
  }
}
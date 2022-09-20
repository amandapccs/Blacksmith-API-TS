import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getCredentials(username: string, password: string): Promise<IUser | null> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [data] = await this.connection.execute(query, [username, password]);
    const [user] = data as IUser[];
    return user || null;
  }
}
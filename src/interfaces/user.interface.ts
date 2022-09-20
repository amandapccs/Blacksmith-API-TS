export interface User {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUser extends User {
  id: number;
}
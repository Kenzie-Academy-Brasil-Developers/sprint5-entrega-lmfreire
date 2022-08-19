export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserResponse {
  name: string;
  email: string;
  password?: string;
  age: number;
}

export interface IUserRequestUpdate {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}

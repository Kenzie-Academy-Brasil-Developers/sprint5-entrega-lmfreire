import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { IUserRequest, IUserResponse } from "../interfaces";
import bcrypt from "bcrypt";

const userCreateService = async ({
  name,
  email,
  age,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const emailAlreadyExist = users.find((user) => user.email == email);

  if (emailAlreadyExist) {
    throw new Error("Email Already Exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    age,
    password: hashedPassword,
  });

  await userRepository.save(user);

  let userResponse: IUserResponse = user;
  delete userResponse.password;

  return userResponse;
};

export default userCreateService;

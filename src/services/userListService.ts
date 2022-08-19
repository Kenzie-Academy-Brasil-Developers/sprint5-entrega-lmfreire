import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserResponse } from "../interfaces";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  let usersResponse: IUserResponse[] = [];
  users.forEach((user) => {
    const userList: IUserResponse = user;
    delete userList.password;

    usersResponse.push(userList);
  });

  return users;
};

export default userListService;

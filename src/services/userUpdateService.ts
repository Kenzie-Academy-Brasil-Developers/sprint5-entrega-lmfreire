import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { IUserRequestUpdate, IUserResponse } from "../interfaces";
import bcrypt from "bcrypt";

const userUpdateService = async (userData: IUserRequestUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new Error("User not found");
  }

  if (userData.id) {
    delete userData.id;
  }

  if (userData.password) {
    const password = userData.password;
    userData.password = await bcrypt.hash(password, 10);
  }

  const updateUser: IUserResponse = {
    ...user,
    ...userData,
  };

  await userRepository.save(updateUser);

  delete updateUser.password;

  return updateUser;
};

export default userUpdateService;

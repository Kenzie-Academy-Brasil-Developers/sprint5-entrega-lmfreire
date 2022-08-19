import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserResponse } from "../interfaces";

const userListOneService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new Error("User not found");
  }

  const userResponse: IUserResponse = user;

  delete userResponse.password;

  return user;
};

export default userListOneService;

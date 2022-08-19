import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const userDelete = await userRepository.delete({ id: id });

  if (userDelete.affected === 0) {
    throw new Error("User not found");
  }

  return userDelete;
};

export default userDeleteService;

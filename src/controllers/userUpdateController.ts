import { Request, Response } from "express";
import { IUserRequestUpdate } from "../interfaces";
import userUpdateService from "../services/userUpdateService";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const userData: IUserRequestUpdate = req.body;
    const { id } = req.params;

    const user = await userUpdateService(userData, id);

    return res.status(200).json({ message: user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userUpdateController;

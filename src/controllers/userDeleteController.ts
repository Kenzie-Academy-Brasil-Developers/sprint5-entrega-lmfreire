import { Request, Response } from "express";
import userDeleteService from "../services/userDeleteService";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userDeleteService(id);

    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userDeleteController;

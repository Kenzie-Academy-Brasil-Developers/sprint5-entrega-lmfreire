import { Request, Response } from "express";
import userListOneService from "../services/userListOneService";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userListOneService(id);
    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userListOneController;

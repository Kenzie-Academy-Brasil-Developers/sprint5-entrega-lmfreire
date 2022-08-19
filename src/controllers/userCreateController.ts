import { Request, Response } from "express";
import { IUserRequest } from "../interfaces";
import userCreateService from "../services/userCreateService";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { email, age, name, password }: IUserRequest = req.body;

    const user = await userCreateService({ email, age, name, password });

    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userCreateController;

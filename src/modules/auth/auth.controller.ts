import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const login = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};



const googleLogin = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.googleLogin(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const AuthController = {
  login,
  googleLogin
};

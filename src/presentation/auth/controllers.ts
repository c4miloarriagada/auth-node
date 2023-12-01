import { Request, Response } from 'express'

export class AuthController {
  constructor() {}

  registerUser = (req: Request, res: Response) => {
    res.json('Register user COntroller')
  }

  loginUser = (req: Request, res: Response) => {
    res.json('Register user COntroller')
  }
}

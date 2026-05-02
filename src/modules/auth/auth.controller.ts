import { Request, Response, NextFunction } from 'express';




import { AuthService } from './auth.service';

export class AuthController {
  constructor(private authService: AuthService) {}

  
  public handleSignup = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.authService.signup(req.body);
      res.status(201).json({ message: "Signup successful" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public renderSignup = (req: Request, res: Response): void => {
    res.render('signup', { title: 'Sign Up' });
  }
}

// Export the class definition, not 'new Auth()'


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
  };

  public handleSignin = async (req: Request, res: Response): Promise<void> => {
    try {
      const { studentIdNo, password } = req.body;
      
      const user = await this.authService.verifySignin(studentIdNo, password);

      res.status(200).json({
        success: true,
        message: "Login successful",
        // Note: verify if user.studentName is the correct field in your DB
        user: { id: user.studentIdNo, stName: user.studentName }
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message
      });
    }
  };
}

// Export the class definition, not 'new Auth()'


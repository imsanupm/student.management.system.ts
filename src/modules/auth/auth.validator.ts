import { Request, Response, NextFunction } from 'express';

export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const { studentName, studentIdNo, age, password } = req.body;

  if (!studentName || !studentIdNo || !age || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (password.length < 4) {
    return res.status(400).json({ error: "Password too short" });
  }

  next(); // Move to the controller
};
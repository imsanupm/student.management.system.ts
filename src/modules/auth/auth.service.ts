import { AuthRepository } from './auth.repository';
import { IStudent } from '../../models/student.model';
import bcrypt from 'bcrypt';

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async signup(data: any): Promise<IStudent> {
    const existing = await this.authRepository.findByIdNo(data.studentIdNo);
    if (existing) throw new Error('Student ID already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    return await this.authRepository.create({
      ...data,
      password: hashedPassword
    });
  }

  async verifySignin(email: string, pass: string) {
    // 1. Get data from Repository
    const user = await this.authRepository.findByIdNo(email);

    if (!user) throw new Error('Invalid credentials');

    // 2. Perform Business Logic
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    return user;
  }

}
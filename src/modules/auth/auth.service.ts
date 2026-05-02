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
}
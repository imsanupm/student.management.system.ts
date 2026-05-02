import { Student, IStudent } from '../../models/student.model';

export class AuthRepository {
  async findByIdNo(studentIdNo: string): Promise<IStudent | null> {
    return await Student.findOne({ studentIdNo });
  }

  async create(studentData: Partial<IStudent>): Promise<IStudent> {
    return await Student.create(studentData);
  }
}
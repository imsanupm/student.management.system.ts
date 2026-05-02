import { Student, IStudent } from '../../models/student.model';

export class AdminRepository {
 
  public async findAllStudents() {
   
    return await Student.find({});
  }
}
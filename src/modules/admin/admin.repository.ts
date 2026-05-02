import { Student, IStudent } from '../../models/student.model';

export class AdminRepository {

    public async findAllStudents() {

        return await Student.find({});
    }

    public async deleteStudentByName(name: string) {

        return await Student.findOneAndDelete({ studentName: name });
    }
}
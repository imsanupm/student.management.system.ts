import { Student } from '../../models/student.model';

export class AdminRepository {

    public async findAllStudents() {

        return await Student.find({});
    }

    public async deleteStudentByName(name: string) {

        return await Student.findOneAndDelete({ studentName: name });
    }

    public async updateStudentById(id: string, updateData: { studentName?: string; studentIdNo?: string; age?: number }) {
        
        return await Student.findByIdAndUpdate(id, updateData, { returnDocument: 'after' });
    }
}
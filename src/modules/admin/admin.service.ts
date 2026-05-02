import { AdminRepository } from './admin.repository';

export class AdminService {
    private adminRepository = new AdminRepository();

    public async getAllStudents() {
        const students = await this.adminRepository.findAllStudents();

        return students.map(student => ({
            id: student._id,
            studentIdNo: student.studentIdNo,
            studentName: student.studentName,
            createdAt: student.createdAt
        }));
    }

    public async removeStudent(name: string) {
        const deletedUser = await this.adminRepository.deleteStudentByName(name);

        if (!deletedUser) {
            throw new Error(`Student with name "${name}" not found.`);
        }

        return deletedUser;
    }

    public async updateStudentDetails(id: string, data: any) {
    
    const { studentName, studentIdNo, age } = data;
    const cleanData = { studentName, studentIdNo, age };

    const updatedUser = await this.adminRepository.updateStudentById(id, cleanData);

    if (!updatedUser) {
      throw new Error("Student not found.");
    }

    return updatedUser;
  }
}
import { AdminRepository } from './admin.repository';

export class AdminService {
    private adminRepository = new AdminRepository();

    public async getAllStudents() {
        const students = await this.adminRepository.findAllStudents();

        // Map the data to return only necessary fields for the admin list
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
}
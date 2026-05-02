import { Request, Response } from 'express';
import { AdminService } from './admin.service';

export class AdminController {
    private adminService = new AdminService();

    /**
     * GET /admin/students
     */
    public listStudents = async (req: Request, res: Response): Promise<void> => {
        try {
            const students = await this.adminService.getAllStudents();

            res.status(200).json({
                success: true,
                count: students.length,
                data: students
            });
        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: "An error occurred while fetching the student list.",
                error: error.message
            });
        }
    };

    public deleteStudent = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name } = req.body;

            if (!name) {
                res.status(400).json({ success: false, message: "Student name is required" });
                return;
            }

            await this.adminService.removeStudent(name as string);

            res.status(200).json({
                success: true,
                message: `Student "${name}" has been successfully deleted.`
            });
        } catch (error: any) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    };

    public updateStudent = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params; 
      const updateData = req.body;


     if (!updateData || Object.keys(updateData).length === 0) {
      res.status(400).json({
        success: false,
        reason: "Missing data for update. Please provide fields to update."
      });
      return;
    }

      const result = await this.adminService.updateStudentDetails(id as string, updateData);

      res.status(200).json({
        success: true,
        message: "Student updated successfully",
        data: {
          studentName: result.studentName,
          studentIdNo: result.studentIdNo,
          age: result.age
        }
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  };
}
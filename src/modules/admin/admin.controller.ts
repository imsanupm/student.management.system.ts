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
}
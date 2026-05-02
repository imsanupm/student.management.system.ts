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
}
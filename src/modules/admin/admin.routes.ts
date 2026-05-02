import { Router } from 'express';
import { AdminController } from './admin.controller';

const router = Router();
const adminController = new AdminController();

// Define the route for listing students
router.get('/students', adminController.listStudents);
router.delete('/student', adminController.deleteStudent)

export default router;
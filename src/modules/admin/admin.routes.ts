import { Router } from 'express';
import { AdminController } from './admin.controller';

const router = Router();
const adminController = new AdminController();


router.get('/students', adminController.listStudents);
router.delete('/student', adminController.deleteStudent)
router.patch('/student/:id', adminController.updateStudent);

export default router;
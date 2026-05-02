import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes";
// import studentRoutes from "../modules/student/student.routes";
 import adminRoutes from "../modules/admin/admin.routes";

const router = Router();

router.use("/", authRoutes);
// router.use("/student", studentRoutes);
router.use("/admin", adminRoutes);

export default router;
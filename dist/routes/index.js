"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("../modules/auth/auth.routes"));
const student_routes_1 = __importDefault(require("../modules/student/student.routes"));
const admin_routes_1 = __importDefault(require("../modules/admin/admin.routes"));
const router = (0, express_1.Router)();
router.use("/", auth_routes_1.default);
router.use("/student", student_routes_1.default);
router.use("/admin", admin_routes_1.default);
exports.default = router;

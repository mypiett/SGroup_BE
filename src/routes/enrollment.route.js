import express from "express";
import enrollmentController from "../controller/enrollment.controller.js";
import verifyMiddleware from "../middleware/verify.middleware.js";

const router = express.Router();

router.post("/courses/:id/enroll", verifyMiddleware.verifyToken, enrollmentController.enroll);
router.get("/users/:id/enrollments", enrollmentController.getEnrollmentsByUser);

export default router;

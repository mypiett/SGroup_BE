import { Router } from "express";
import courseController from "../controller/course.controller.js";
import verifyMiddleware from "../middleware/verify.middleware.js";

const route = Router();

route.post("/", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, courseController.createCourse);
route.get("/", verifyMiddleware.verifyToken, courseController.getAllCourses);
route.get("/:id", verifyMiddleware.verifyToken, courseController.getCourseById);
route.patch("/:id", verifyMiddleware.verifyToken, courseController.updateCourse);
route.delete("/:id", courseController.deleteCourse);
// route.post('/:id/enroll')
export default route;
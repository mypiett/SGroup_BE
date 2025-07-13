import courseService from "../service/course.service.js";
import userModel from "../model/auth.model.js";
import { ObjectId } from "mongodb";

class CourseController {
  async createCourse(req, res, next) {
    try {
      const userId = req.user?.id;

      if (!userId || !ObjectId.isValid(userId)) {
        return res.status(400).json({ success: false, message: "Invalid user ID" });
      }

      const user = await userModel.getUserById(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      const courseData = {
        title: req.body.title,
        description: req.body.description,
        expiresAt: req.body.expiresAt,
        createdBy: {
          id: userId.toString(),
          username: user.username || user.name  
        },
        createdAt: new Date(),
      };


      const course = await courseService.createCourse(courseData);
      return res.status(201).json({ success: true, message: "Course created", data: course });

    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAllCourses(req, res, next) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const result = await courseService.getAllCourses(Number(page), Number(limit));
      res.status(200).json({ success: true, message: "Get all courses successfully", data: result });
    } catch (err) {
      next(err);
    }
  }

  async getCourseById(req, res, next) {
    try {
      const course = await courseService.getCourseById(req.params.id); 
      res.status(200).json({ success: true, message: "Get course successfully", data: course });
    } catch (err) {
      next(err);
    }
  }

  async updateCourse(req, res, next) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updated = await courseService.updateCourse(id, updateData);

      if (!updated) {
        return res.status(404).json({ success: false, message: "Course not found" });
      }

      res.status(200).json({ success: true, message: "Course updated successfully" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }


  async deleteCourse(req, res, next) {
    try {
      const courseId = req.params.id;
      await courseService.deleteCourse(courseId);
      res.status(200).json({ success: true, message: "Course deleted successfully" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}

export default new CourseController(); 

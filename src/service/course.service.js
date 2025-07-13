import courseModel from "../model/course.model.js";
import userModel from "../model/auth.model.js";
import { ObjectId } from "mongodb";

class CourseService {
  async createCourse(data) {
    return await courseModel.createCourse(data);
  }

  async getAllCourses(page, limit) {
    const { courses, total } = await courseModel.getAllCourses(page, limit);

    const formattedCourses = await Promise.all(
      courses.map(async (course) => {
        let creatorData = { id: "", username: "" };

        const creatorId = course?.createdBy?.id || course?.createdBy;

        if (creatorId && ObjectId.isValid(creatorId.toString())) {
          const user = await userModel.getUserById(creatorId.toString());
          if (user) {
            creatorData = {
              id: user._id.toString(),
              username: user.name || user.username
            };
          }
        }

        return {
          _id: course._id.toString(), 
          title: course.title,
          description: course.description,
          price: course.price,
          createdBy: creatorId?.toString() || "",
          creator: creatorData,
          createdAt: course.createdAt,
        };
      })
    );

    return {
      courses: formattedCourses,
      total,
      page,
      limit
    };
  }

  async getCourseById(id) {
    const course = await courseModel.getCourseById(id);
    if (!course) return null;
    let creatorData = { id: "", username: "" };
    const creatorId = course?.createdBy?.id || course?.createdBy;

    if (creatorId && ObjectId.isValid(creatorId.toString())) {
      const user = await userModel.getUserById(creatorId.toString());
      if (user) {
        creatorData = {
          id: user._id.toString(),
          username: user.name || user.username
        };
      }
    }

    return {
      id: course._id.toString(),
      title: course.title,
      description: course.description,
      creator: creatorData,
      createdAt: course.createdAt,
    };
  }

  async updateCourse(id, updateData) {
    const existingCourse = await courseModel.getCourseById(id);
    if (!existingCourse) return null;

    await courseModel.updateCourse(id, updateData);
    return true;
  }

  async deleteCourse(courseId) {
    const course = await courseModel.getCourseById(courseId);
    if (!course) {
      throw new Error(`Course ${courseId} not found`);
    }

    return await courseModel.deleteCourse(courseId);
  }
}

export default new CourseService();

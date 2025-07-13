import enrollmentModel from "../model/enrollment.model.js";

class EnrollmentService {
  async enrollUser(userId, courseId) {
    return await enrollmentModel.enrollUser(userId, courseId);
  }

  async getUserEnrollments(userId) {
    return await enrollmentModel.getEnrollmentsByUser(userId);
  }
}

export default new EnrollmentService();

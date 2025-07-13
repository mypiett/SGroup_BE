import enrollmentService from "../service/enrollment.service.js";

class EnrollmentController {
  async enroll(req, res) {
    try {
      const userId = req.user?.id;
      const courseId = req.params.id;

      const enrollment = await enrollmentService.enrollUser(userId, courseId);
      res.status(201).json({ success: true, message: "Enrolled successfully", data: enrollment });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

  async getEnrollmentsByUser(req, res) {
    try {
      const userId = req.params.id;
      const enrollments = await enrollmentService.getUserEnrollments(userId);
      res.status(200).json({ success: true, data: enrollments });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
}

export default new EnrollmentController();

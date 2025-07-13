import { getDB } from "../config/db.config.js";
import { ObjectId } from "mongodb";

const ENROLLMENT_COLLECTION = "enrollments";

const enrollUser = async (userId, courseId) => {
  return await getDB().collection(ENROLLMENT_COLLECTION).insertOne({
    user: new ObjectId(userId),
    course: new ObjectId(courseId),
    enrolledAt: new Date()
  });
};

const getEnrollmentsByUser = async (userId) => {
  return await getDB().collection(ENROLLMENT_COLLECTION)
    .find({ user: new ObjectId(userId) })
    .toArray();
};

export default {
  enrollUser,
  getEnrollmentsByUser
};

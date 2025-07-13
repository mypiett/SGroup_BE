import { getDB } from "../config/db.config.js";
import { ObjectId } from "mongodb";

const COURSE_COLLECTION = "courses";

const createCourse = async ({ title, description, createdBy, expiresAt }) => {
  return await getDB().collection(COURSE_COLLECTION).insertOne({
    title,
    description,
    createdBy: {
      id: new ObjectId(createdBy.id),
      username: createdBy.username
    },
    expiresAt,
    createdAt: new Date()
  });
};


const getCourseById = async (id) => {
  return await getDB().collection(COURSE_COLLECTION).findOne({ _id: new ObjectId(id) });
};

const getAllCourses = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const db = getDB();

  const courses = await db.collection(COURSE_COLLECTION)
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();

  const total = await db.collection(COURSE_COLLECTION).countDocuments();

  return { courses, total };
};

const updateCourse = async (id, data) => {
  return await getDB().collection(COURSE_COLLECTION).updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

const deleteCourse = async (id) => {
  return await getDB().collection(COURSE_COLLECTION).deleteOne({ _id: new ObjectId(id) });
};

export default {
  createCourse,
  getCourseById,
  getAllCourses,
  updateCourse,
  deleteCourse
};

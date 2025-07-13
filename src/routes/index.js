import { Router } from "express"
import authRoute from "./auth.route.js"
import courseRoute from "./course.route.js";
import enrollmentRoute from './enrollment.route.js'
const router = Router()
router.use("/auth", authRoute)
router.use("/courses", courseRoute);
router.use("/",enrollmentRoute);
export default router
import { Router } from "express"
import userRoute from "./user.route.js"
import pollRoute from "./poll.route.js";

const router = Router()
router.use("/users", userRoute)
router.use("/polls", pollRoute);

export default router
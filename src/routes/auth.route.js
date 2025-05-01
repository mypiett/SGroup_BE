import { Router } from "express";
import authController from "../controller/auth.controller.js";
import ValidateMiddleware from "../middleware/validate.middleware.js";
import verifyMiddleware from "../middleware/verify.middleware.js";

const   route = Router();

route.post(
    "/register",
    ValidateMiddleware.validateName,
    ValidateMiddleware.validateEmail,
    authController.register
);
route.post("/login", ValidateMiddleware.validateEmail, authController.login)
route.get("/getMe", verifyMiddleware.checkAuth, authController.getMe)
export default route;
import { Router } from "express";
import userController from "../controller/auth.controller.js";
import ValidateMiddleware from "../middleware/validate.middleware.js";

const route = Router();
route.post(
    "/register",
    ValidateMiddleware.validateName,
    ValidateMiddleware.validateEmail,
    userController.register
);
route.post("/login", ValidateMiddleware.validateEmail, userController.login)
export default route;
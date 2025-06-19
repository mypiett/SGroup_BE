import { Router } from "express";
import userController from "../controller/user.controller.js";
import ValidateMiddleware from "../middleware/validate.middleware.js";
import verifyMiddleware from "../middleware/verify.middleware.js";



const route = Router();

route.put("/updateMe", verifyMiddleware.verifyToken, userController.updateMyProfile);
route.get("/getMe", verifyMiddleware.verifyToken, userController.getMe);
route.get("/", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, userController.getAllUsers);
route.get("/:id", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, userController.getUserById);
route.put("/:id", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, userController.updateUser);
route.delete("/:id", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, userController.deleteUser);

route.post(
    "/register",
    ValidateMiddleware.validateName,
    ValidateMiddleware.validateEmail,
    userController.register
);
route.post("/login", ValidateMiddleware.validateEmail, userController.login)
route.post('/forgot-password', ValidateMiddleware.validateEmail,userController.forgotPassword);
route.post('/reset-password',ValidateMiddleware.validateEmail,userController.resetPassword);


export default route;
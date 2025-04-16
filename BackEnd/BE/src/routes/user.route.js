import express from 'express';
import UserController from '../controller/user.controller';
import validateMiddleware from '../middleware/validate.middleware';

const router = express.Router();

router
  .route('/')
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router
  .route('/:id')
  .get(validateMiddleware.validateId, UserController.getUserById)
  .put(validateMiddleware.validateId, UserController.updateUser)
  .delete(validateMiddleware.validateId, UserController.deleteUser);

export default router;

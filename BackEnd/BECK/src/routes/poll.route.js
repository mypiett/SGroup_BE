import { Router } from "express";
import pollController from "../controller/poll.controller.js";
import verifyMiddleware from "../middleware/verify.middleware.js";

const route = Router();

route.post("/", verifyMiddleware.verifyToken, pollController.createPoll);
route.get("/", verifyMiddleware.verifyToken, pollController.getAllPolls);
route.get("/:id", verifyMiddleware.verifyToken, pollController.getPollById);
route.patch("/:id/lock", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, pollController.lock);
route.patch("/:id/unlock", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, pollController.unlock);
route.post("/:id/option", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, pollController.addOption);
route.delete("/:id/option/:optionId", verifyMiddleware.verifyToken, verifyMiddleware.checkAdmin, pollController.removeOption);
route.post('/:id/vote', verifyMiddleware.verifyToken, verifyMiddleware.checkUser, pollController.vote);
route.delete('/:id/unvote', verifyMiddleware.verifyToken, verifyMiddleware.checkUser, pollController.unvote);
route.delete("/:id", pollController.deletePoll);
export default route;
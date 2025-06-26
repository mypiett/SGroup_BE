import pollService from "../service/poll.service.js";
import userModel from "../model/user.model.js";
import { ObjectId } from "mongodb";

class PollController {
  async createPoll(req, res, next) {
    try {
      const userId = req.user?.id;

      if (!userId || !ObjectId.isValid(userId)) {
        return res.status(400).json({ success: false, message: "Invalid user ID" });
      }

      const user = await userModel.getUserById(userId);

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      if (!Array.isArray(req.body.options) || req.body.options.length < 1) {
        return res.status(400).json({
          success: false,
          message: "Poll must have at least one option"
        });
      }

      const pollData = {
        title: req.body.title,
        description: req.body.description,
        options: req.body.options,
        expiresAt: req.body.expiresAt,
        creator: {
          id: user._id,
          username: user.name || user.username
        },
        createdAt: new Date(),
        isLocked: false
      };

      const poll = await pollService.createPoll(pollData);
      return res.status(201).json({ success: true, message: "Poll created", data: poll });

    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAllPolls(req, res, next) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const result = await pollService.getAllPolls(Number(page), Number(limit));
      res.status(200).json({ success: true, message: "Get all Polls successfully", data: result });
    } catch (err) {
      next(err);
    }
  }

  async getPollById(req, res, next) {
    try {
      const poll = await pollService.getPollById(req.params.id);
      res.status(200).json({ success: true, message: "Get poll successfully", data: poll });
    } catch (err) {
      next(err);
    }
  }
  async deletePoll(req, res) {
    try {
      const pollId = req.params.id;
      await pollService.deletePoll(pollId);
      res.status(200).json({ message: "Poll deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


  async lock(req, res, next) {
    try {
      const poll = await pollService.getPollById(req.params.id);
      const userId = req.user.id;

    if (poll.creator.id.toString() !== userId && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Forbidden: You are not the creator or admin" });
    }
      await pollService.lockPoll(req.params.id);
      res.status(200).json({ success: true, message: "Poll locked" });
    } catch (err) {
      next(err);
    }
  }

  async unlock(req, res, next) {
    try {
      const poll = await pollService.getPollById(req.params.id);
    const userId = req.user.id;

    if (poll.creator.id.toString() !== userId && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Forbidden: You are not the creator or admin" });
    }
      await pollService.unlockPoll(req.params.id);
      res.status(200).json({ success: true, message: "Poll unlocked" });
    } catch (err) {
      next(err);
    }
  }

  async addOption(req, res, next) {
    try {
      const { text } = req.body;
      await pollService.addOption(req.params.id, text);
      res.status(200).json({ success: true, message: "Option added" });
    } catch (err) {
      next(err);
    }
  }

  async removeOption(req, res, next) {
    try {
      await pollService.removeOption(req.params.id, req.params.optionId);
      res.status(200).json({ success: true, message: "Option removed" });
    } catch (err) {
      next(err);
    }
  }

  async vote(req, res, next) {
    try {
      const userId = req.user?.id;
      const optionIds = Array.isArray(req.body.optionIds) ? req.body.optionIds : [req.body.optionId];
      await pollService.vote(req.params.id, optionIds, userId);
      res.status(200).json({ success: true, message: "Voted successfully" });
    } catch (err) {
      next(err);
    }
  }


  async unvote(req, res, next) {
    try {
      const userId = req.user?.id;
      await pollService.unvote(req.params.id, req.body.optionId, userId);
      res.status(200).json({ success: true, message: "Unvoted successfullyyy" });
    } catch (err) {
      next(err);
    }
  }
}

export default new PollController();

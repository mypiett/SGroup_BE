import pollModel from "../model/poll.model.js";
import userModel from "../model/user.model.js";
import { ObjectId } from "mongodb";

class PollService {
  async createPoll(data) {
    return await pollModel.createPoll(data);
  }

  async getAllPolls(page, limit) {
    const { polls, total } = await pollModel.getAllPolls(page, limit);

    const formattedPolls = await Promise.all(
      polls.map(async (poll) => {
        const votesCount = poll.options.reduce((sum, opt) => sum + (opt.votes || 0), 0);
        let creatorData = { id: "", username: "" };

        const creatorId = poll?.creator?.id || poll?.creator;

        if (creatorId && ObjectId.isValid(creatorId.toString())) {
          const user = await userModel.getUserById(creatorId.toString());
          if (user) {
            creatorData = {
              id: user._id.toString(),
              username: user.name || user.username
            };
          }
        } 

        return {
          id: poll._id.toString(),
          title: poll.title,
          description: poll.description,
          options: poll.options.map(opt => ({
            id: opt._id.toString(),
            text: opt.text
          })),
          creator: creatorData,
          isLocked: poll.isLocked,
          createdAt: poll.createdAt,
          expiresAt: poll.expiresAt || null,
          votesCount
        };
      })
    );

    return {
      polls: formattedPolls,
      total,
      page,
      limit
    };
  }

  async getPollById(id) {
    const poll = await pollModel.getPollById(id);
    if (!poll) return null;

    const totalVotes = poll.options.reduce((sum, opt) => sum + (opt.votes || 0), 0);
    let creatorData = { id: "", username: "" };
    const creatorId = poll?.creator?.id || poll?.creator;

    if (creatorId && ObjectId.isValid(creatorId.toString())) {
      const user = await userModel.getUserById(creatorId.toString());
      if (user) {
        creatorData = {
          id: user._id.toString(),
          username: user.name || user.username
        };
      }
    }

    const optionsWithUserInfo = await Promise.all(
      poll.options.map(async (opt) => {
        const users = await Promise.all(
          (opt.userVote || []).map(async (userId) => {
            if (!ObjectId.isValid(userId.toString())) return null;
            const user = await userModel.getUserById(userId.toString());
            return user ? { id: user._id.toString(), name: user.name || user.username } : null;
          })
        );

        return {
          id: opt._id.toString(),
          text: opt.text,
          votes: opt.votes || 0,
          userVote: users.filter(Boolean)
        };
      })
    );

    return {
      id: poll._id.toString(),
      title: poll.title,
      description: poll.description,
      options: optionsWithUserInfo,
      creator: creatorData,
      isLocked: poll.isLocked,
      createdAt: poll.createdAt,
      expiresAt: poll.expiresAt || null,
      totalVotes
    };
  }

  async deletePoll(pollId) {
    const poll = await pollModel.getPollById(pollId);
    if (!poll) {
      throw new Error(`Poll ${pollId} not found`);
    }

    return await pollModel.deletePoll(pollId);
  }


  async lockPoll(id) {
    return await pollModel.updatePoll(id, { isLocked: true });
  }

  async unlockPoll(id) {
    return await pollModel.updatePoll(id, { isLocked: false });
  }

  async addOption(pollId, text) {
    const poll = await pollModel.getPollById(pollId);
    if (!poll) {
      throw new Error(`Poll ${pollId} not found`);
    }
    return await pollModel.addOption(pollId, text);
  }

  async removeOption(pollId, optionId) {
    const poll = await pollModel.getPollById(pollId);
    if (!poll) throw new Error("Poll not found");

    const exists = poll.options.some(opt => opt._id.toString() === optionId);
    if (!exists) {
      throw new Error(`Option ${optionId} does not exist in poll ${pollId}`);
    }

    return await pollModel.removeOption(pollId, optionId);
  }

  async vote(pollId, optionIds, userId) {
    const poll = await pollModel.getPollById(pollId);
    if (!poll) throw new Error("Poll not found");
    if (poll.isLocked) throw new Error("Poll is locked. Voting is not allowed.");

    for (const optionId of optionIds) {
      const index = poll.options.findIndex(opt => opt._id.toString() === optionId);
      if (index === -1) throw new Error(`Option ${optionId} is not valid for this poll`);

      const option = poll.options[index];
      const alreadyVoted = option.userVote?.some(u => u.toString() === userId);
      if (alreadyVoted) throw new Error(`User has already voted for option ${optionId}`);;

      poll.options[index].votes = (option.votes || 0) + 1;
      poll.options[index].userVote = [...(option.userVote || []), new ObjectId(userId)];
    }

    return await pollModel.updatePollOptions(pollId, poll.options);
  }

  async unvote(pollId, optionId, userId) {
    const poll = await pollModel.getPollById(pollId);
    if (!poll) throw new Error("Poll not found");
    if (poll.isLocked) throw new Error("Poll is locked. Voting is not allowed.");

    const optionIndex = poll.options.findIndex(opt => opt._id.toString() === optionId);
    if (optionIndex === -1) throw new Error("Option not found");

    const option = poll.options[optionIndex];
    const userIndex = option.userVote.findIndex(uid => uid.toString() === userId);
    if (userIndex === -1) throw new Error("User has not voted for this option");

    option.votes = Math.max(0, option.votes - 1);
    option.userVote.splice(userIndex, 1);

    poll.options[optionIndex] = option;
    return await pollModel.updatePollOptions(pollId, poll.options);
  }

}

export default new PollService();

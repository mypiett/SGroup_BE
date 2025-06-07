import { getDB } from "../config/db.config.js";
import { ObjectId } from "mongodb";

const POLL_COLLECTION = "polls";

const createPoll = async ({ title, description, options, creator, expiresAt }) => {
  const pollOptions = options.map(opt => ({
    _id: new ObjectId(),
    text: opt.text,
    votes: 0,
    userVote: []
  }));

  return await getDB().collection(POLL_COLLECTION).insertOne({
    title,
    description,
    options: pollOptions,
    creator: {
      id: new ObjectId(creator.id),
      username: creator.username
    },
    isLocked: false,
    createdAt: new Date(),
    expiresAt: expiresAt ? new Date(expiresAt) : null
  });
};

const getPollById = async (id) => {
  return await getDB().collection(POLL_COLLECTION).findOne({ _id: new ObjectId(id) });
};

const getAllPolls = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const db = getDB();

  const polls = await db.collection(POLL_COLLECTION)
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();

  const total = await db.collection(POLL_COLLECTION).countDocuments();

  return { polls, total };
};

const updatePoll = async (id, data) => {
  return await getDB().collection(POLL_COLLECTION).updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

const deletePoll = async (id) => {
  return await getDB().collection(POLL_COLLECTION).deleteOne({ _id: new ObjectId(id) });
};

const addOption = async (pollId, text) => {
  const newOption = {
    _id: new ObjectId(),
    text,
    votes: 0,
    userVote: []
  };
  return await getDB().collection(POLL_COLLECTION).updateOne(
    { _id: new ObjectId(pollId) },
    { $push: { options: newOption } }
  );
};

const removeOption = async (pollId, optionId) => {
  return await getDB().collection(POLL_COLLECTION).updateOne(
    { _id: new ObjectId(pollId) },
    { $pull: { options: { _id: new ObjectId(optionId) } } }
  );
};

async function updatePollOptions(pollId, newOptions) {
  return await getDB().collection(POLL_COLLECTION).updateOne(
    { _id: new ObjectId(pollId)},
    { $set: { options: newOptions } } 
  );
}

export default {
  createPoll,
  getPollById,
  getAllPolls,
  updatePoll,
  deletePoll,
  addOption,
  removeOption,
  updatePollOptions
};

const { Thought, User, Reaction } = require("../models");
const { Types } = require("mongoose");

const ThoughtController = {
  // Retrieves all thoughts from the database
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Retrieves a single thought by its ID
  async getThoughtsById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: "Thought not found" });
      } else {
        res.status(200).json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creates a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Deletes a thought by its ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({
        _id: req.params.thoughtId,
      });
      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Updates a thought by its ID
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      if (!thought) {
        res.status(400).json({ message: "Thought not found" });
      } else {
        res.status(200).json(thought);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Creates a new reaction for a thought
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        res.status(400).json({ message: "Thought not found" });
      } else {
        res.status(200).json(thought);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Deletes a reaction from a thought
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(400).json({ message: "Thought not found" });
      } else {
        res.status(200).json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ThoughtController;

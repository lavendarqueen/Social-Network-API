const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reaction } = require("../models");

module.exports = {
  async addREaction(rec, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } }
      ).populate("reactions");
      res.status(200).json({
        message: "Reaction created successfully.",
        reaction,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeReaction(rec, res) {
    try {
      const thought = await Thought.findOnAndUpdate(
        {
          _id: req.params.thoughtId,
        },
        { $pull: { reactions: { _id: req.params.reactionID } } },
        { new: true }
      );
      if (!thought) {
        res.status(404).json({
          message: "No thought found with that ID.",
        });
      }
      res.status(200).json({
        message: "Reaction successfully deleted.",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

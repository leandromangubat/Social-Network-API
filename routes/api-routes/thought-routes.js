const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  deleteThought,
  updateThoughtById,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Routes for viewing and creating thoughts
router.route("/").get(getAllThoughts).post(createThought);

// Routes to view, modify, or delete a thought
router
  .route("/:thoughtId")
  .get(getThoughtsById)
  .put(updateThoughtById)
  .delete(deleteThought);

// Route for creating reaction
router.route("/:thoughtId/reactions").post(createReaction);

// Route to delete reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;

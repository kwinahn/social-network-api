const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addFriend,
  removeFriend,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");


// get all users
router.route("/").get(getAllUsers).post(createUser);

// get by id, add, and delete 
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//add and delete friend
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;

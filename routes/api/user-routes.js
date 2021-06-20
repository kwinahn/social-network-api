const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// get all users
router.route('/').get(getUsers).post(createUser);

// get user by ID, add and delete
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// delete and post friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;

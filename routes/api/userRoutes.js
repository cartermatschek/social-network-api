const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  removeUser,
  createFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/users').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/users/:userId').get(getSingleUser).put(updateUser).delete(removeUser);

// /api/users/:userId/friends/:friendId
router.route('/users/:userId/friends/:friendId').post(createFriend).delete(removeFriend);

module.exports = router;

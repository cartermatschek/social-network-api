const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  removeUser,
} = require('../../controllers/userController');

// /api/users
router.route('/users').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(removeUser);

module.exports = router;

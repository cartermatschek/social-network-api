const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("email is not valid");
        }
      }
    },
    thoughts: [thoughtsSchema],
    friends: [user],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual called 'friendCount' that retrieves the length of the user's friends array field on query.
postSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialize the User model
const User = model('user', userSchema);

module.exports = User;

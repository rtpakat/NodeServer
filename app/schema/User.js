import mongoose from "mongoose";
import bcrypt from "bcrypt";
import timestamps from "mongoose-timestamp";

const SALT_WORK_FACTOR = 8;

const schema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

schema.plugin(timestamps, {
  createdAt: "createdAt",
  updatedAt: "updatedAt"
});

schema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_WORK_FACTOR), null);
};

schema.methods.validPassword = password => {
  return bcrypt.compareSync(this.password, password);
};

const User = mongoose.model("users", schema);
export default User;

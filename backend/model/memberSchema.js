import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  yearleft: {
    type: Number,
    validate: {
      validator: function(value) {
        // Validate if the yearLeft is less than or equal to the current year
        const currentYear = new Date().getFullYear();
        return value <= currentYear;
      },
      message: 'Year must be less than or equal to the current year',
    },
    
  },
  active: {
    type: Boolean,
    required: true,
  },
  project1: {
    type: String,
    required: true,
  },
  project2: {
    type: String,
  },
  project3: {
    type: String,
  },
  domain: {
    type: String,
    required: true,
  },
  departmentclg: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
  },
  profile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

const Member = mongoose.model("Members", memberSchema);

export default Member;

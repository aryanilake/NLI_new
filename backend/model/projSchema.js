import mongoose from "mongoose";

const projSchema = mongoose.Schema({
  projname: {
    type: String,
    required: true,
    unique: true,
  },
  active:{
    type:Boolean,
    required:true
  },

  about:{
    type: String,
    required: true,
  },

  link1: {
    type: String,
  },
  link2: {
    type: String,
  },

  

  
});


const Project = mongoose.model('Project', projSchema);


export default Project;
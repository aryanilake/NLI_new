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

  profile: {
    type: String,
  },

  

  
});


const Project = mongoose.model('Project', projSchema);


export default Project;
import mongoose from "mongoose";

const projSchema = mongoose.Schema({
  projname: {
    type: String,
    required: true,
    unique: true,
  },
 

  dateStarted:{
    type:Date,
    required: true
  },

  active:{
    type:Boolean,
    required:true
  },

  about:{
    type: String,
    required: true,
  },

  projimg:{
    type:String,
    required:true
  },

  

  
});


const Project = mongoose.model('Project', projSchema);


export default Project;
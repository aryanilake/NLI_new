import mongoose from "mongoose";

const activitiesSchema = mongoose.Schema({
    activitiesname: {
        type: String,
        required: true,
        unique: true,
    },

    image: {
        type: String,
    },

    details: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);
const Activities = mongoose.model('Activities', activitiesSchema);


export default Activities;
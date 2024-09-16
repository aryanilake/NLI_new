import mongoose from "mongoose";

const eventsSchema = mongoose.Schema({
   
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
    eventsname: {
        type: String,
        required: true,
        unique: true,
    },
    
},
    {
        timestamps: true,
    }
);
const Events = mongoose.model('Events', eventsSchema);


export default Events;

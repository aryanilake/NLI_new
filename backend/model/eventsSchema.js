import mongoose from "mongoose";

const eventsSchema = mongoose.Schema({
   
    eventsname: {
        type: String,
        required: true,
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
const Events = mongoose.model('Events', eventsSchema);


export default Events;

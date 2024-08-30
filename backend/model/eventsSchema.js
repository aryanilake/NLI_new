import mongoose from "mongoose";

const eventsSchema = mongoose.Schema({
    name: {
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
const Events = mongoose.model('Events', eventsSchema);


export default Events;
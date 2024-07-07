import mongoose from "mongoose";

const achievementSchema = mongoose.Schema({
    achievementname: {
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
},
{
    timestamps: true,
}
);
const Achievement = mongoose.model('Achievement', achievementSchema);


export default Achievement;
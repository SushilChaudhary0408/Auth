import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateJoined: {
        type: Date,
        default: () => Date.now()
    },
    isStaff: {
        type: Boolean,
        default: false,
    }
});


export const User = mongoose.model("User", userSchema);
export default User;
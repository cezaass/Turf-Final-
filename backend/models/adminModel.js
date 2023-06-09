import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    password: {
        type: String,
        
    },
    phone: {
        type: Number,
    },
    userImg: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model('admin', adminSchema)
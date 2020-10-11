import { boolean } from 'joi';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 6,
        max: 255,
        required: true
    },
    email: {
        type: String,
        min: 6,
        max: 255,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 1024,
        required: true
    },
    prefferedTheme: {
        type: boolean,
        required: true
    },
    groups: {
        type: Array,
        required: true
    }
},{
    timestamps: true
});

export default mongoose.model('User',userSchema);
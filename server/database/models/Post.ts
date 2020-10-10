import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 2,
        max: 255,
        required: true
    },
    id: {
        type: ObjectId,
        min: 6,
        max: 255,
        required: true
    },
    isGlobal: {
        type: Boolean,
        required: true
    },
    text: {
        type: String,
        min: 6,
        max: 2048,
        required: true
    },
    author: {
        type: ObjectId,
        min: 6,
        max: 255,
        required: true
    },
    hasImage: {
        type: Boolean,
        required: true
    }
},{
    timestamps: true
});

export default mongoose.model('Post',postSchema);
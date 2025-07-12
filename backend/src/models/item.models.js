import { image } from 'image-downloader';
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true
    },
    description : {
        type: String,
        required: true,
        trim: true
    },
    category : {
        type: String,
        required: true,
        trim: true
    },
    image : [{
        type: String,
        required: true,
        trim: true
    }],
    size : {
        type: String,
        required: true,
        trim: true
    },
    type : {
        type: String,
        required: true,
        enum: ['new', 'used'],
        default: 'new'
    },
    condition : {
        type: String,
        required: true,
        enum: ['good', 'fair', 'poor'],
        default: 'good'
    },
    price : {
        type: Number,
        required: true,
        min: 0
    },
    tags : [
        {
            type: String,
            trim: true
        }
    ],
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isAvailable : {
        type: Boolean,
        default: true
    },
} , {timestamps: true});

export const Item = mongoose.model("Item" , itemSchema)
import mongoose from "mongoose";

const swapSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Completed", "Cancelled"],
        default: "Pending"
    },
    swapWithItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true
    }
}, { timestamps: true });

export const Swap = mongoose.model("Swap", swapSchema);

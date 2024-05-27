import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Automatically generate ObjectId
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    downloadUrl: { type: String, required: true },
    featured: { type: Boolean, default: false }
}, { timestamps: true });

// Export the model
export default mongoose.model('Book', BookSchema);
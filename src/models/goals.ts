import { IGoal } from "../types/goal";
import { model, Schema } from "mongoose";
import { deflate } from "zlib";

const goalSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
        
        status: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: true}
)

export default model<IGoal>("Goal",goalSchema)
import mongoose, {Document, Schema} from "mongoose";

export interface InterfaceTask extends Document{
    title: string;
    description: string;
    status: "pending" | "completed";
    user: mongoose.Types.ObjectId;
}

const taskSchema = new Schema<InterfaceTask>(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            
        },
        status:{
            type: String,
            enum: ["pending","completed"],
            default:"pending"
        },
        user:{
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },{timestamps: true}
);
export const Task = mongoose.model<InterfaceTask>("Task",taskSchema);
import { Document } from "mongoose"

export interface IGoal extends Document {
    name: string
    description: string
    status: boolean
}

import { Response, Request } from "express";
import { IGoal } from "../../types/goal";
import Goal from "./../../models/goals";

const getGoals = async (req: Request, res: Response): Promise<void> => {
    try {
        const goals: IGoal[] = await Goal.find()
        res.status(200).json({goals})
    } catch (error) {
        throw error
    }
}

const addGoal = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body)
        const body = req.body as Pick<IGoal, "name" | "description" | "status">
        const goal: IGoal = new Goal({
            name: body.name,
            description: body.description,
            status: body.status,
        })
        const newGoal: IGoal = await goal.save()
        const allGoals: IGoal[] = await Goal.find()
        res
            .status(201)
            .json({ message:"Goal added",goal: newGoal,goals: allGoals})
    } catch (error) {
        console.error(error.message);
    }
}

const updateGoal = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateGoal: IGoal | null = await Goal.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allGoals: IGoal[] = await Goal.find()
        res.status(200).json({
            message: "Goal Updated",
            goal: updateGoal,
            goals: allGoals,
        })
    } catch (error) {
        throw error
    }
}

const deleteGoal = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedGoal: IGoal | null = await Goal.findByIdAndRemove(
            req.params.id
        )
        const allGoals: IGoal[] = await Goal.find()
        res.status(200).json({
            message: "Goal deleted",
            goal: deletedGoal,
            goals: allGoals,
        })
    } catch (error) {
        throw error
    }
}
export { getGoals,addGoal, updateGoal, deleteGoal}
import { Router } from "express"
import { getGoals, addGoal, updateGoal, deleteGoal } from "../controllers/goals"

const router: Router = Router()

router.get("/goals",getGoals)

router.post("/add-goal", addGoal)

router.put("/edit-goal/:id",updateGoal)

router.delete("/delete-goal/:id",deleteGoal)

export default router
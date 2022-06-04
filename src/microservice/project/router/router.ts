import { Router } from "express"
import Controller from "../controllers/controller"

const router = Router()

router.post('/project', Controller.create)
router.patch('/project', Controller.update)

export default router
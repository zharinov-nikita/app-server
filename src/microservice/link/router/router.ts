import { Router } from "express"
import Controller from "../controllers/controller"

const router = Router()

router.post('/link', Controller.create)
router.delete('/link/:_id', Controller.delete)
router.get('/link', Controller.readAll)
router.get('/link/:_id', Controller.read)
router.patch('/link', Controller.update)
router.get('/cc/:short', Controller.redirect)

export default router
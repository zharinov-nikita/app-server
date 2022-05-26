import { Router } from "express"
import LinkController from "../controllers/controller.js"

const router = new Router()

router.post('/link', LinkController.createLink)
router.get('/link', LinkController.getLinks)
router.delete('/link/:_id', LinkController.deleteLink)
router.patch('/link', LinkController.updateLink)
router.get('/cc/:short', LinkController.redirectLink)

export default router
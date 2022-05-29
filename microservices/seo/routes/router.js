import { Router } from "express"
import SeoController from "../controllers/controller.js"

const router = new Router()

router.post('/seo', SeoController.create)
router.patch('/seo', SeoController.update)

export default router
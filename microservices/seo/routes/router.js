import { Router } from "express"
import SeoController from "../controllers/controller.js"

const router = new Router()

router.post('/seo', SeoController.create)
router.patch('/seo', SeoController.update)
router.delete('/seo/:_id', SeoController.delete)
router.get('/seo/:_id', SeoController.getOne)


export default router
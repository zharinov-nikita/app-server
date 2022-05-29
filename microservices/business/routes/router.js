import { Router } from "express"
import ProjectController from "../controllers/ProjectController.js"
import SeoController from "../controllers/SeoController.js"
import DomainController from "../controllers/DomainController.js"

const router = new Router()


// project
router.get('/business', ProjectController.getAll)
router.post('/business', ProjectController.create)
router.patch('/business', ProjectController.update)
router.patch('/business/seo', SeoController.update)
router.patch('/business/domain', DomainController.update)
// project

// seo
router.get('/business/seo/:_id', SeoController.getOne)
// seo

export default router
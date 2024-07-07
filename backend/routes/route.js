import express from 'express'
const router = express.Router()
import * as controller from '../controllers/appController.js'

// post
router.route('/createmember').post(controller.createmember)
router.route('/createproject').post(controller.createproject)
// router.route('/createachievement').post(controller.createachievement)


// get
router.route('/getallmembers').get(controller.getAllmembers)
router.route('/getallprojects').get(controller.getAllprojects)
router.route('/getallachievements').get(controller.getAllachievements)

router.route('/member/:email').get(controller.getMember)
router.route('/project/:projname').get(controller.getProject)
// router.route('/achievement/:achievementname').get(controller.getAchievement)


// edit



export default router


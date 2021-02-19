import { Router, Request, Response } from 'express'
const router = Router()

import * as Controller from '../controllers/index.controller'

router.get('/', Controller.getUser)
router.get('/:id', Controller.getUserById)
router.post('/', Controller.createUser)
router.put('/:id', Controller.updateUser)
router.delete('/:id', Controller.deleteUser)

export default router

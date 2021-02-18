import { Router, Request, Response } from 'express'
const router = Router()

import * as Controller from '../controllers/index.controller'

router.get('/', Controller.getUser)
// router.get('/:id', Controller.getUser)
// router.post('/', Controller.getUser)
// router.put('/:id', Controller.getUser)
// router.delete('/:id', Controller.getUser)

export default router

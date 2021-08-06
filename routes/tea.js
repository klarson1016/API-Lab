import { Router } from 'express'
const router = Router()
import * as teaCtrl from '../controller/teas.js'

router.get('/teas', teaCtrl.index)
router.get('/teas/:id', teaCtrl.show)
router.post('/teas', teaCtrl.create)
router.put('/teas/:id', teaCtrl.update)
router.delete('/teas/:id', teaCtrl.delete)


export {
  router
}

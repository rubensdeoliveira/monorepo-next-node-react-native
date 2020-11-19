import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import TccsController from '../controllers/TccsController'

const tccRouter = Router()
const tccController = new TccsController()

tccRouter.get('/:id', tccController.show)
tccRouter.get('/', tccController.index)
tccRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      suggestion: Joi.string().required(),
      description: Joi.string().required(),
    }
  }),
  tccController.create
)
tccRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      suggestion: Joi.string().required(),
      description: Joi.string().required(),
    }
  }),
  tccController.update
)

export default tccRouter



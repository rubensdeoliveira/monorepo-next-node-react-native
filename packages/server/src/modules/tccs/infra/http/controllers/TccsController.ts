import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ShowTccService from '@modules/tccs/services/ShowTccService'
import ListTccsService from '@modules/tccs/services/ListTccsService'
import CreateTccService from '@modules/tccs/services/CreateTccService'
import UpdateTccService from '@modules/tccs/services/UpdateTccService'

export default class TccController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showTcc = container.resolve(ShowTccService)

    const tcc = await showTcc.execute({ tcc_id: id })

    return response.json(classToClass(tcc))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTccs = container.resolve(ListTccsService)

    const tccs = await listTccs.execute()

    return response.json(classToClass(tccs))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { suggestion, description } = request.body

    const createTcc = container.resolve(CreateTccService)

    const tcc = await createTcc.execute({
      suggestion, description
    })

    return response.json(classToClass(tcc))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { suggestion, description} = request.body

    const updateUserAvatar = container.resolve(UpdateTccService)

    const tcc = await updateUserAvatar.execute({
      tcc_id: id,
      suggestion,
      description
    })

    return response.json(classToClass(tcc))
  }
}

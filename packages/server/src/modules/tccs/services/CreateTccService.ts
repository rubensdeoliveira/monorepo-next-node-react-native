import { injectable, inject } from 'tsyringe'

import ITccsRepository from '../repositories/ITccsRepository'

import Tcc from '../infra/typeorm/entities/Tcc'

interface IRequest {
  suggestion: string
  description: string
}

@injectable()
class CreateTccService {
  constructor(
    @inject('TccsRepository')
    private tccsRepository: ITccsRepository,
  ) {}

  public async execute({ suggestion, description }: IRequest): Promise<Tcc> {
    const tcc = await this.tccsRepository.create({
      suggestion,
      description,
    })

    return tcc
  }
}

export default CreateTccService

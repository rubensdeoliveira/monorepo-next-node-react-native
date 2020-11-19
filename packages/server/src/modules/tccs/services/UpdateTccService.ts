import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import ITccsRepository from '../repositories/ITccsRepository'

import Tcc from '../infra/typeorm/entities/Tcc'

interface IRequest {
  tcc_id: string
  suggestion: string
  description: string
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('TccsRepository')
    private tccsRepository: ITccsRepository,
  ) {}

  public async execute({
    tcc_id,
    suggestion,
    description
  }: IRequest): Promise<Tcc> {
    const tcc = await this.tccsRepository.findById(tcc_id)

    if (!tcc) {
      throw new AppError('TCC não encontrado')
    }

    tcc.suggestion = suggestion
    tcc.description = description

    return this.tccsRepository.save(tcc)
  }
}

export default UpdateProfileService

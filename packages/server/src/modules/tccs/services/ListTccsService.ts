import { injectable, inject } from 'tsyringe'

import ITccsRepository from '../repositories/ITccsRepository'

import Tcc from '../infra/typeorm/entities/Tcc'

@injectable()
class ShowProfileService {
  constructor(
    @inject('TccsRepository')
    private tccsRepository: ITccsRepository
  ) {}

  public async execute(): Promise<Tcc[]> {
    const tccs = await this.tccsRepository.findAllTccsDosCoders()

    return tccs
  }
}

export default ShowProfileService

import { getRepository, Repository } from 'typeorm'

import ITccsRepository from '@modules/tccs/repositories/ITccsRepository'
import ICreateTccDTO from '@modules/tccs/dtos/ICreateTccDTO'

import Tcc from '@modules/tccs/infra/typeorm/entities/Tcc'

class TccsRepository implements ITccsRepository {
  private ormRepository: Repository<Tcc>

  constructor() {
    this.ormRepository = getRepository(Tcc)
  }

  public async findById(id: string): Promise<Tcc | undefined> {
    const user = await this.ormRepository.findOne(id)

    return user
  }

  public async findAllTccsDosCoders(): Promise<Tcc[]> {
    const tcc = await this.ormRepository.find()

    return tcc
  }

  public async create(tccData: ICreateTccDTO): Promise<Tcc> {
    const tcc = this.ormRepository.create(tccData)

    await this.ormRepository.save(tcc)

    return tcc
  }

  public async save(tcc: Tcc): Promise<Tcc> {
    return this.ormRepository.save(tcc)
  }
}

export default TccsRepository

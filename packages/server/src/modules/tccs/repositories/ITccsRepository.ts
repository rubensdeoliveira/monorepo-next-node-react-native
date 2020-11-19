import Tcc from '../infra/typeorm/entities/Tcc'
import ICreateTccDTO from '../dtos/ICreateTccDTO'

export default interface ITccsRepository {
  findById(id: string): Promise<Tcc | undefined>
  findAllTccsDosCoders(): Promise<Tcc[]>
  create(data: ICreateTccDTO): Promise<Tcc>
  save(tcc: Tcc): Promise<Tcc>
}

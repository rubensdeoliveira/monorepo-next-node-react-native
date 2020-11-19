import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('tccs')
class Tcc {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  suggestion: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Tcc

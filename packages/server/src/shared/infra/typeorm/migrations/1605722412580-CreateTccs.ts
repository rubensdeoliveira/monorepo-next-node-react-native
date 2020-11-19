import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTccs1605722412580 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'tccs',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
              },
              {
                name: 'suggestion',
                type: 'varchar',
                isNullable: false
              },
              {
                name: 'description',
                type: 'varchar',
                isNullable: false
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()'
              }
            ]
          })
        )
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tccs')
      }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class ListingUser1590661890843 implements MigrationInterface {
  name = "ListingUser1590661890843";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "listings" ADD "userId" uuid NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "listings" ADD CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "listings" DROP CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "listings" DROP COLUMN "userId"`,
      undefined
    );
  }
}

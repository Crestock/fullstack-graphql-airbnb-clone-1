import { MigrationInterface, QueryRunner } from "typeorm";

export class ListingUser1590661756011 implements MigrationInterface {
  name = "ListingUser1590661756011";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "listings" ADD "ownerId" uuid NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "listings" ADD CONSTRAINT "FK_c3dc0ba6b57c545899ab3187ea9" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "listings" DROP CONSTRAINT "FK_c3dc0ba6b57c545899ab3187ea9"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "listings" DROP COLUMN "ownerId"`,
      undefined
    );
  }
}

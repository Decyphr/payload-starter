import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "settings" ADD COLUMN "hello_bar_enabled" boolean;
  ALTER TABLE "settings" ADD COLUMN "hello_bar_content" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "settings" DROP COLUMN IF EXISTS "hello_bar_enabled";
  ALTER TABLE "settings" DROP COLUMN IF EXISTS "hello_bar_content";`)
}

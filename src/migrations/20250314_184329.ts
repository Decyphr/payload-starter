import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "meta_hidden" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_hidden" boolean DEFAULT false;
  ALTER TABLE "posts" ADD COLUMN "meta_hidden" boolean DEFAULT false;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_hidden" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN IF EXISTS "meta_hidden";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_meta_hidden";
  ALTER TABLE "posts" DROP COLUMN IF EXISTS "meta_hidden";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_meta_hidden";`)
}

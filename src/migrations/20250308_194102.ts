import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"general_settings_site_title" varchar,
  	"general_settings_tagline" varchar,
  	"general_settings_logo_id" integer,
  	"general_settings_favicon_id" integer,
  	"general_settings_admin_email" varchar,
  	"general_settings_phone" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"social_facebook" varchar,
  	"social_x" varchar,
  	"social_instagram" varchar,
  	"social_linkedin" varchar,
  	"social_youtube" varchar,
  	"analytics_google_analytics_i_d" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_general_settings_logo_id_media_id_fk" FOREIGN KEY ("general_settings_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_general_settings_favicon_id_media_id_fk" FOREIGN KEY ("general_settings_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "settings_general_settings_general_settings_logo_idx" ON "settings" USING btree ("general_settings_logo_id");
  CREATE INDEX IF NOT EXISTS "settings_general_settings_general_settings_favicon_idx" ON "settings" USING btree ("general_settings_favicon_id");
  CREATE INDEX IF NOT EXISTS "settings_meta_meta_image_idx" ON "settings" USING btree ("meta_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "settings" CASCADE;`)
}

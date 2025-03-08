import type { PayloadRequest } from "payload";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailerSendgrid from "nodemailer-sendgrid";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Categories } from "~/cms/collections/categories";
import { Media } from "~/cms/collections/media";
import { Pages } from "~/cms/collections/pages";
import { Posts } from "~/cms/collections/posts";
import { Users } from "~/cms/collections/users";
import { defaultLexical } from "~/cms/fields/default-lexical";
import { Footer } from "~/cms/footer/config";
import { Header } from "~/cms/header/config";
import { plugins } from "~/cms/plugins";
import { getServerSideURL } from "~/utilities/get-url";

import { Settings } from "./settings/config";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ["~/cms/components/before-login"],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ["~/cms/components/before-dashboard"],
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? "",
    },
  }),
  collections: [Pages, Posts, Media, Categories, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, Settings],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user)
          return true;

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get("authorization");
        return authHeader === `Bearer ${process.env.CRON_SECRET}`;
      },
    },
    tasks: [],
  },
  // Used for Railway healthcheck
  endpoints: [
    {
      path: "/health",
      method: "get",
      handler: async (_req) => {
        return new Response("OK", { status: 200 });
      },
    },
  ],
  // Sendgrid Email SMTP configuration
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_FROM,
    defaultFromName: process.env.EMAIL_NAME,
    transportOptions: nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    }),
  }),

  // Disabled GraphQL API (unused)
  graphQL: {
    disable: true,
  },
});

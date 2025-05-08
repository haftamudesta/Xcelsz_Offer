import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();
const {VITE_PGUSER,VITE_PGPASSWORD,VITE_PGHOST,VITE_PGDATABASE}=process.env;
if (!VITE_PGUSER || !VITE_PGPASSWORD || !VITE_PGHOST || !VITE_PGDATABASE) {
        throw new Error('Missing required database connection environment variables');
      }
export const sql = neon(
        `postgresql://${VITE_PGUSER}:${VITE_PGPASSWORD}@${VITE_PGHOST}/${VITE_PGDATABASE}?sslmode=require`
      );
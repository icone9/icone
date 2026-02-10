import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: 'aa8j5crs',
  dataset: 'production',
  plugins: [structureTool()],
  schema
});
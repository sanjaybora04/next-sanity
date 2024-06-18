import { defineConfig } from 'sanity';
import {codeInput} from '@sanity/code-input'
import { structureTool } from 'sanity/structure'
import schemas from "./schemas"
import { markdownSchema } from 'sanity-plugin-markdown/next';
import 'easymde/dist/easymde.min.css'

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [structureTool(),codeInput(), markdownSchema()],
  schema: { types: schemas }
})

export default config
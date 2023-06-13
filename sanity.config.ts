import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"
import {codeInput} from '@sanity/code-input'

const config = defineConfig({
  projectId: "mdgpr7bk",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool(),codeInput()],
  schema: { types: schemas }
})

export default config
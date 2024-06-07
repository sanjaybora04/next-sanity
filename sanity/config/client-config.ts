import { ClientConfig } from "next-sanity";

const config:ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-06-01",
}

export default config;
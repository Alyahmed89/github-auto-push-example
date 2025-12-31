import { defineApp } from "rwsdk/worker"
import { render } from "rwsdk/router"
import { route } from "rwsdk/router"
import { ReactDocument } from "@/app/Document"

// Import page components
import HomePage from '@/app/pages/home.tsx'
import AboutPage from '@/app/pages/about.tsx'
import FeaturesPage from '@/app/pages/features.tsx'

// Import API routes

// Import proxy external API route
import * as proxyExternalApi from '@/routes/api/proxy-external/route.ts'

export default defineApp([
  // API routes
  // Proxy external API route
  route("/api/proxy-external", {
    post: proxyExternalApi.POST
  }),
  // React routes
  render(ReactDocument, [
    route("/", HomePage),    route("/about", AboutPage),    route("/features", FeaturesPage)
  ])
])
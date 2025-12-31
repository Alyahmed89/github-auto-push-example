import { defineConfig } from "vite"
import { redwood } from "rwsdk/vite"
import { cloudflare } from "@cloudflare/vite-plugin"
import { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: { name: "worker" },
    }),
    redwood(),
    tailwindcss()  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  ssr: {
    noExternal: ["rwsdk", "kysely-d1"],
  },
  optimizeDeps: {
    exclude: ["rwsdk", "kysely-d1"],
  },
  build: {
    rollupOptions: {
      external: ["cloudflare:workers"],
    },
  },
})
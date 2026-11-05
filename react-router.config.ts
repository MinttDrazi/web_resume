import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: [
    "/",
    "/portfolio",
    "/cs",
    "/en",
    "/cs/portfolio",
    "/en/portfolio",
  ],
} satisfies Config;

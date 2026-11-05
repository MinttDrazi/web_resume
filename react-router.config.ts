import type { Config } from "@react-router/dev/config";
import fs from "node:fs";
import path from "node:path";

export default {
  basename: "/web_resume/",
  prerender: [
    "/",
    "/portfolio",
    "/cs",
    "/en",
    "/cs/portfolio",
    "/en/portfolio",
  ],
  buildEnd() {
    const clientDir = path.resolve("build/client");
    const subDir = path.join(clientDir, "web_resume");
    if (fs.existsSync(subDir)) {
      fs.cpSync(subDir, clientDir, { recursive: true });
      fs.rmSync(subDir, { recursive: true, force: true });
    }
    // Fallback pro neznámé routy
    const indexFile = path.join(clientDir, "index.html");
    const notFoundFile = path.join(clientDir, "404.html");
    if (fs.existsSync(indexFile)) {
      fs.copyFileSync(indexFile, notFoundFile);
    }
  },
} satisfies Config;

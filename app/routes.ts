import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    route(":lang?", "routes/resume.tsx", { index: true }),
    route(":lang?/portfolio", "routes/portfolio.tsx"),
  ]),
] satisfies RouteConfig;

import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/resume.tsx"),
    route("porfolio", "routes/porfolio.tsx"),
  ]),
] satisfies RouteConfig;

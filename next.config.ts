// v11 moved withSentryConfig to the "./config" subpath export.
import { withSentryConfig } from "@sentry/nextjs/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
};

// Sentry GlitchTip wiring (errors.rilcy.app). No Sentry auth token / org /
// project is configured, so sourcemap uploads are disabled (they are optional;
// source context still works without them).
export default withSentryConfig(nextConfig, {
  sourcemaps: { disable: true },
  silent: true,
});

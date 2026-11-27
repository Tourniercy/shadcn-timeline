// Client-side Sentry (minimal manual setup).
// DSN comes from NEXT_PUBLIC_SENTRY_DSN (inlined at build time); the SDK
// stays inert when it is absent (e.g. local dev without env).
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

export function register() {
  if (!dsn) {
    return;
  }

  Sentry.init({
    dsn,
    // Errors-only would be leaner, but this matches the official minimal setup.
    tracesSampleRate: 1.0,
  });
}

// Next.js instrumentation-client hooks -> Sentry.
// (No dedicated helper export exists for onError in @sentry/nextjs v11; a plain
// captureException handler matches Next's documented hook signature.)
export function onError(error: unknown) {
  Sentry.captureException(error);
}
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

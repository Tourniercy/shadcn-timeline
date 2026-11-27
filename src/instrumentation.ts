// Server-side Sentry (minimal manual setup). With `output: "export"` there is
// no Node server in production, so this only runs during `next dev`/`next start`
// — it is wired for completeness and stays inert when no DSN is configured.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

export async function register() {
  if (!dsn) {
    return;
  }

  Sentry.init({
    dsn,
    tracesSampleRate: 1.0,
  });
}

// Next.js request-error hook -> Sentry handler.
export const onRequestError = Sentry.captureRequestError;

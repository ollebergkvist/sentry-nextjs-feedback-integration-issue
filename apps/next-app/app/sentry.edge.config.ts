import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "", // Replace
  tracesSampleRate: 0.5,
  debug: false,
});

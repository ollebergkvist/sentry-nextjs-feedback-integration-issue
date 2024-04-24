import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "", // Replace
  tracesSampleRate: 0.3,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
      unmask: ["header", "footer", "nav"],
      networkDetailAllowUrls: [window.location.origin],
      networkDetailDenyUrls: [
        window.location.origin + "/_next/",
        window.location.origin + "/monitoring/",
      ],
      networkCaptureBodies: true,
    }),
  ],
  ignoreErrors: [],
});

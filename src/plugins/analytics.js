import VueGtag, { trackRouter } from "vue-gtag-next";

export function setupAnalytics(app, router) {
  app.use(VueGtag, {
    property: {
      id: "G-BF9ME6EYHM",
    },
    useDebugger: true,
    isEnabled: true,
  });

  // Track router navigation
  trackRouter(router);
}

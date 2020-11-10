import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import store from "./redux/store";
import App from "./App";

Sentry.init({
  dsn: "https://23a64f7b59c64556bb9c2e72bcf7ce02@o474776.ingest.sentry.io/5511611",
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

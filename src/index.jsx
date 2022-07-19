import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";


// //  sentry error reporting
/*
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";
*/

// // GOogle Analytics
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

/*           SENTRY
// Sentry.init({
//   dsn: process.env.REACT_APP_SENTRY,
//   integrations: [new BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

*/

const {
  initializeAppCheck,
  ReCaptchaV3Provider,
} = require("firebase/app-check");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_AUTH,
  authDomain: "cinematrix-143.firebaseapp.com",
  projectId: "cinematrix-143",
  storageBucket: "cinematrix-143.appspot.com",
  messagingSenderId: "209726079634",
  appId: "1:209726079634:web:3f10bfafd58b08e2cadc4b",
  measurementId: "G-GRNH879JLF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

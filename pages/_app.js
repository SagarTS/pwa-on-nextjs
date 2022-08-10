import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e); // can be in global state
    });

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("sw worker registered", reg))
        .catch(() => console.log("failed"));
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", null);
    };
  });

  return (
    <Component
      {...pageProps}
      deferredPrompt={deferredPrompt}
      setDeferredPrompt={setDeferredPrompt}
    />
  );
}

export default MyApp;

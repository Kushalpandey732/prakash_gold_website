import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./theme";
import SmoothScroll from "./components/SmoothScroll";
import "./styles.css";
import faviconUrl from "./initial.png";

function applyFavicon(href) {
  const links = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
  if (links.length === 0) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = href;
    document.head.appendChild(link);
    return;
  }
  links.forEach((link) => {
    link.type = "image/png";
    link.href = href;
  });
}

applyFavicon(faviconUrl);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

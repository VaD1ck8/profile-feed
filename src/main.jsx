
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import App from "./App.jsx";
import { muiTheme } from "./theme/muiTheme.js";

// Plain CSS (design tokens + layout + components) drives our own UI.
// The MUI calendar is themed separately via muiTheme.js.
import "./styles/tokens.css";
import "./styles/layout.css";
import "./styles/components.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={muiTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);

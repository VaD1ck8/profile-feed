import { createTheme } from "@mui/material/styles";

/**
 * MUI components don't read your CSS variables, so the relevant design
 * tokens are mirrored here. Keep these in sync with styles/tokens.css.
 */
const tokens = {
  accent: "#3d8eda",
  text: "#333437",
  textMuted: "#929292",
  border: "#dedede",
  surface: "#ffffff",
  radiusSm: 6,
  fontBase: '"Roboto", system-ui, -apple-system, "Segoe UI", sans-serif',
};

export const muiTheme = createTheme({
  palette: {
    primary: { main: tokens.accent },
    text: { primary: tokens.text, secondary: tokens.textMuted },
    divider: tokens.border,
    background: { paper: tokens.surface },
  },
  shape: { borderRadius: tokens.radiusSm },
  typography: { fontFamily: tokens.fontBase, fontSize: 13 },
  components: {
    // Day cells in <DateCalendar>
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: 13,
          "&.Mui-selected": {
            backgroundColor: tokens.accent,
            "&:hover, &:focus": { backgroundColor: tokens.accent },
          },
          "&.MuiPickersDay-today": {
            borderColor: tokens.accent,
          },
        },
      },
    },
  },
});

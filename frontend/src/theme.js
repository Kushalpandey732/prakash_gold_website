import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#e1a140" },
    secondary: { main: "#914110" },
    background: {
      default: "#08070d",
      paper: "rgba(255,255,255,0.04)",
    },
    text: {
      primary: "#f7f4ef",
      secondary: "#d8b487",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "'Raleway', 'Segoe UI', Arial, sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 600 },
  },
});

export default theme;

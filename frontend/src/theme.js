import { createTheme } from "@mui/material/styles";

const brand = {
  1: "#006876",
  2: "#007881",
  3: "#00879c",
  4: "#008b9d",
  5: "#fbd180",
  6: "#e9ad54",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: brand[4], dark: brand[1], light: brand[3] },
    secondary: { main: brand[6], light: brand[5], dark: brand[2] },
    background: {
      default: "#fffdf8",
      paper: "#ffffff",
    },
    text: {
      primary: brand[1],
      secondary: brand[2],
    },
    divider: "rgba(0, 104, 118, 0.14)",
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "'Raleway', 'Segoe UI', Arial, sans-serif",
    fontFamilySerif: "'Cormorant Garamond', Georgia, serif",
    h1: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 400,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 400,
      letterSpacing: "0.03em",
    },
    h3: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 500,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    h6: {
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      fontSize: "0.75rem",
    },
    button: {
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      fontWeight: 600,
      fontSize: "0.72rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: brand[1],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        text: {
          color: brand[1],
          "&:hover": {
            backgroundColor: "rgba(0, 104, 118, 0.06)",
          },
        },
        textPrimary: {
          color: brand[1],
        },
        contained: {
          backgroundColor: brand[1],
          color: "#ffffff",
          "&:hover": { backgroundColor: brand[2] },
        },
        outlined: {
          borderColor: brand[1],
          color: brand[1],
          "&:hover": {
            borderColor: brand[4],
            backgroundColor: "rgba(0, 139, 157, 0.06)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 0 },
      },
    },
  },
});

export default theme;

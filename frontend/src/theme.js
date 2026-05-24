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
    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    fontFamilySerif: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    h1: {
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
    },
    h3: {
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
    },
    h4: {
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "0.08em",
    },
    h6: {
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      fontSize: "0.75rem",
    },
    body1: {
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.7,
    },
    body2: {
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.65,
    },
    button: {
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      fontWeight: 500,
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

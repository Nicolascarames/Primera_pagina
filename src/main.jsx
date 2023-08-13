import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./UserContext.jsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#eb5e28",
      light: "#ff812d",
      dark: "#ff9249",
      contrastText: "#242105",
    },
    yellow: {
      main: "#fca311",
      light: "#ffcb76",
      dark: "#ffcb76",
      contrastText: "#242105",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);

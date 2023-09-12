import React from "react";
import ReactDOM from "react-dom";
import Demo from "./Demo";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import material_ui_theme from "./config/material_ui_theme";

ReactDOM.render(
  <ThemeProvider theme={createTheme(material_ui_theme)}>
    <Demo />
  </ThemeProvider>,
  document.querySelector("#root")
);

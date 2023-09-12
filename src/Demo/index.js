import React from "react";
import TextField from "@material-ui/core/TextField";

import { colors } from "../config/constants";

import styles from "./styles.module.css";

export default function BasicTextFields() {
  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "20px" }}>
        There is just one source of truth from file constants.css. No SASS is
        involved just CSS, JS, and React syntax. All styling here is identical
        to Osprey except custom media queries where breakpoint vars don't work.
        Advantage to using 'ComponentName.module.css' and using like
        'styles.someClass' is that the CSS is localized to the 'ComponentName'
        component only and it is not global.
      </div>
      <div style={{ marginBottom: "20px" }}>
        The only problem is using custom media queries like @mobile, @tablet,
        and @desktop how we have in Osprey. It would not see those CSS root vars
        (mobileWidth, tabletWidth, desktopWidth), that can be done only with
        SASS (or some other preprocessor).
      </div>
      <form noValidate autoComplete="off">
        <TextField
          variant="filled"
          id="standard-basic"
          label="Testing theme vars"
        />
      </form>

      <div style={{ color: colors.primary, marginTop: "20px" }}>
        primary - js variable
      </div>
      <div style={{ color: colors.accent, marginTop: "20px" }}>
        accent - js variable
      </div>
      <div style={{ color: colors.accent2, marginTop: "20px" }}>
        accent 2 - js variable
      </div>
      <div style={{ color: colors.error, marginTop: "20px" }}>
        error - js variable
      </div>

      <div className={styles.title}>lightHeaderText - css variables</div>
    </div>
  );
}

import { colors, breakPoints } from "./constants";
import { lighten } from "@material-ui/core/styles/colorManipulator";

console.log("colors: ", colors);
console.log("breakPoints: ", breakPoints);

const appColors = {
  primary: colors.primary || "#000", // Appeases the unit test gods' inability to load css
  accent: colors.accent || "#FFF", // Appeases the unit test gods' inability to load css
  accent2: colors.accent2 || "#FFF", // Appeases the unit test gods' inability to load css
  error: colors.error,
  text: colors.text,
  lightHeaderText: colors.lightHeaderText,
  linkText: colors.linkText,
  darkPrimary: colors.darkPrimary,
  lightGray: colors.lightGray
};

export default {
  palette: {
    common: {
      warn: "rgb(250, 229, 0)"
    },
    primary: {
      main: appColors.primary,
      light: lighten(appColors.primary, 0.9),
      dark: appColors.primary
    },
    secondary: {
      main: appColors.accent,
      light: lighten(appColors.accent, 0.9)
    },
    accent2: {
      main: appColors.accent2,
      light: lighten(appColors.accent2, 0.85)
    },
    error: {
      main: appColors.error
    },
    text: {
      main: appColors.text
    },
    lightHeaderText: {
      main: appColors.lightHeaderText
    },
    row: {
      trim: lighten(appColors.primary, 0.9),
      hover: lighten(appColors.primary, 0.8),
      selected: lighten(appColors.primary, 0.6)
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        color: "#fff",
        backgroundColor: appColors.primary,
        "&:hover": {
          backgroundColor: lighten(appColors.primary, 0.4)
        }
      },
      outlined: {
        borderColor: appColors.accent
      }
    },
    MuiInput: {
      underline: {
        "&:after": {
          borderBottomColor: appColors.accent
        },
        "&:before": {
          borderBottom: "1px solid rgb(175, 175, 175)"
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: "2px solid rgb(175, 175, 175)"
        }
      }
    },
    MuiFormControl: {
      root: {
        margin: "5px 0"
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#FAFAFA",
          color: "#0071CE"
        }
      }
    },
    MuiListItemIcon: {
      root: {
        color: "inherit"
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "12px"
      }
    },
    MuiChip: {
      root: {
        backgroundColor: appColors.accent
      },
      deleteIcon: {
        color: "#fff",
        "&:hover": {
          color: "rgb(215, 215, 215)"
        }
      },
      avatar: {
        backgroundColor: "#fff",
        color: appColors.accent
      }
    },
    MuiTab: {
      root: {
        "&$selected": {
          color: appColors.accent
        }
      }
    },
    MuiStepIcon: {
      root: {
        "&$active": {
          color: appColors.accent
        },
        "&$completed": {
          color: appColors.accent
        }
      }
    },
    MuiStepper: {
      root: {
        backgroundColor: "transparent"
      }
    },
    MuiFilledInput: {
      underline: {
        "&:before": {
          borderBottom: "none"
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: "none"
        }
      }
    }
  },
  typography: {
    fontFamily: ["Roboto", "PT Sans", "Arial", "sans-serif"]
  },
  breakpoints: {
    values: {
      // all following values should be non-zero except in tests
      xs: 0,
      sm: breakPoints.mobileWidth ? parseInt(breakPoints.mobileWidth, 10) : 0,
      md: breakPoints.tabletWidth ? parseInt(breakPoints.tabletWidth, 10) : 0,
      lg: breakPoints.desktopWidth ? parseInt(breakPoints.desktopWidth, 10) : 0
    }
  }
};

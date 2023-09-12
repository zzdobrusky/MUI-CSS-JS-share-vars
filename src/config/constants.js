import "./constants.css";

export const cssValue = (property) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
};

export const colors = {
  primary: cssValue("--primary"),
  accent: cssValue("--accent"),
  accent2: cssValue("--accent2"),
  error: cssValue("--error"),
  text: cssValue("--text"),
  warn: cssValue("--warn"),
  linkText: cssValue("--linkText"),
  darkPrimary: cssValue("--darkPrimary"),
  lightHeaderText: cssValue("--lightHeaderText"),
  lightGray: cssValue("--lightGray")
};

// not needed in OSA
// this can be replaced within css file with @value directive
/* https://www.falldowngoboone.com/blog/share-variables-between-javascript-and-css/#:~:text=CSS%20Modules%20also%20offers%20the,from%20CSS%20modules%20to%20anywhere. */
export const breakPoints = {
  mobileWidth: cssValue("--mobileWidth"),
  tableWidth: cssValue("--tabletWidth"),
  desktopWidth: cssValue("--desktopWidth")
};

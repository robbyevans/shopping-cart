// src/foundations/index.ts

import { IStaticColors, IStaticGradients, IStaticShadows } from "./types"; // Adjust the path as needed

export const STATIC_COLORS: IStaticColors = {
  // Define your color palettes
  green: {
    "25": "#F2F9F5",
    "50": "#D3EDDF",
    "100": "#B0DEC6",
    "200": "#8DCFAD",
    "300": "#6AC093",
    "400": "#47B17A",
    "500": "#24A360",
    "600": "#1E8851",
    "700": "#186F41",
    "800": "#135432",
    "900": "#0D3B23",
  },
  // ... other colors

  primary: {
    "900": "#0D3B23", // Primary green
    "800": "#16623B", // Hover color
    // Add more shades if needed
  },
  secondary: {
    "500": "#DAA520", // Gold
    // Add more shades if needed
  },
  neutral: {
    white: "#FFFFFF",
    black: "#000000",
    // Other neutrals
  },

  // Base colors
  base: {
    black: "#232021",
    white: "#ffffff",
    primary: "#0D3B23",
    whiteGray: "#efefef",
    red: "#f04438",
    lightRed: "#fda29b",
    green: "#12b76a",
  },

  // Error and warning colors
  error: {
    "50": "#fef3f2",
    "100": "#fee4e2",
    "400": "#F97066",
    "600": "#D92D20",
  },
  warning: {
    "400": "#FDB022",
  },
};

export const STATIC_GRADIENTS: IStaticGradients = {
  primaryGradient: "linear-gradient(45deg, #3d80c1 0%, #24a360 100%)",
  // ... other gradients
};

export const STATIC_SHADOWS: IStaticShadows = {
  xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  sm: "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
  md: "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
  lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.10), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
  xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.10), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
  // ... other shadows
};

// Screen sizes for media queries
export const SCREEN_SIZE = {
  desktopKiosk: "1080px",
  desktopKioskLarge: "1920px",
  medium: "768px",
  mobileSmall: "420px",
  vhApp: "500px",
};

export const deviceSize = {
  desktopKioskLarge: `(max-width: ${SCREEN_SIZE.desktopKioskLarge})`,
  lg: `(max-width: ${SCREEN_SIZE.desktopKiosk})`,
  md: `(max-width: ${SCREEN_SIZE.medium})`,
  mobileSmall: `(max-width: ${SCREEN_SIZE.mobileSmall})`,
  vhApp: `(max-width: ${SCREEN_SIZE.vhApp})`,
};

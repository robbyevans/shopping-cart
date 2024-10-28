// src/foundations/types.ts

export interface ColorScale {
  [key: string]: string;
}

export interface IStaticColors {
  [colorName: string]: ColorScale | { [key: string]: ColorScale };
}

export interface IStaticGradients {
  [gradientName: string]: string | { [key: string]: string } | (() => string);
}

export interface IStaticShadows {
  [shadowName: string]: string;
}

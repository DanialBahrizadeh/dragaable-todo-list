export type Theme = {
  img: "darkImg" | "lightImg";
  backgroundColor: string;
  listBackgroundColor: string;
  textColor: string;
  lightTextColor: string;
  hoverColor: string;
  borderColor: string;
};

export type ThemeProps = { theme: Theme };

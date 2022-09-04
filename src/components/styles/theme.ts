import { Theme } from "../../model/Theme";

export const lightTheme: Theme = {
  img: "lightImg",
  backgroundColor: "hsl(0, 0%, 98%)",
  listBackgroundColor: "#fff",
  textColor: "hsl(235, 19%, 35%)",
  lightTextColor: "hsl(236, 9%, 61%)",
  hoverColor: "hsl(235, 13%, 33%)",
  borderColor: "hsl(233, 11%, 84%)",
};

export const DarkTheme: Theme = {
  img: "darkImg",
  backgroundColor: "hsl(235, 21%, 11%)",
  listBackgroundColor: "hsl(235,24%,19%)",
  textColor: "hsl(234, 39%, 85%)",
  lightTextColor: "rgba(202, 205, 232, 50%)",
  hoverColor: "hsl(236, 33%, 92%)",
  borderColor: "hsl(233, 14%, 35%)",
};

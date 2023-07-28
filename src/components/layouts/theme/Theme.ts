import { createTheme } from "@mui/material/styles";
const Theme = (color: "dark" | "light") => {
  return createTheme({
    palette: {
      mode: color,
      success: {
        main: "#247F66",
      },
    },
  });
};

export default Theme;

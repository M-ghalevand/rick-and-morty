import type { FC } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./Theme";
import useSelectors from "../../../hooks/useSelectors";

const MUIProvider: FC<IChildren> = ({ children }) => {
  const { themeMode } = useSelectors();
  return (
    <ThemeProvider theme={Theme(themeMode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIProvider;
